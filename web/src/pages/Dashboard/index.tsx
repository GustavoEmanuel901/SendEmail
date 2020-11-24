import React, { useState, useEffect, useRef } from 'react';

import Email from '../../components/Email';
import Navbar from '../../components/Navbar'
import api from '../../services/api'

import { Container, Wrapper, Title, Input, Block, SearchIcon, Error } from './styles';

interface Mail {
  id: string;
  to: string;
  subject: string;
  body: string;
}

const Dashboard: React.FC = () => {

  const scrollObserver = useRef<HTMLDivElement>(null)

  const [error, setError] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [emails, setEmails] = useState<Mail[]>([])
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [radio, setRadio] = useState<number>(0)

  const intersectObserver = new IntersectionObserver((entries => {
    const Scrollradio = entries[0].intersectionRatio as number
    setRadio(Scrollradio)
  }))

  const user_id = localStorage.getItem('token')

  useEffect(() => {
    const observer = scrollObserver.current as Element
    intersectObserver.observe(observer) 

    return () => {
      intersectObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    try {
      if(radio > 0) {

        setPage(page + 1)
      
        api.get(`/email?page=${page}&search=${search}`, { 
          headers: { 
            authorization: user_id,
          }
        }).then(res => {
          setEmails([...emails, ...res.data])
          setShowLoading(true)
        })
        setShowLoading(false)
      }
      
    } catch (error) {
      setError(true)
    }
  }, [radio, isDelete])

  useEffect(() => {
    api.get(`/email?page=1&search=${search}`, { 
      headers: { 
        authorization: user_id,
      }
    }).then(res => {
      setEmails(res.data)
    })
  
  }, [search])

  async function deleteEmail(emailId: string) {
    try {
      await api.delete(`/email/${emailId}`, { 
        headers: { 
          Authorization: user_id
        }
      })

      setIsDelete(true)
      setIsDelete(false)
    } catch (error) {
      alert(error)
    }
  }

  if(error) {
    return <Error>Algo deu Errado, Tente Novamente</Error>
  }

  return (
    <Container>
     <Navbar/>

     <Wrapper>
        <Title>E-mails Enviados</Title>
        <Block>
          <SearchIcon/>
          <Input 
            placeholder='Pesquise Aqui!'
            value={search}
            onChange={e => setSearch(e.target.value)}  
          />
        </Block>
     </Wrapper>

      {emails.map(email => {
        return (
          <Email
            key={email.id}
            id={email.id}
            subject={email.subject}
            to={email.to}
            text={email.body}
            deleteEmail={() => deleteEmail(email.id)}
          />
        )
      })}

      <div ref={scrollObserver}></div>
    </Container>
  );
};

export default Dashboard;
