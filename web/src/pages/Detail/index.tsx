import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { FiArrowLeft } from 'react-icons/fi'
import { useTheme } from '../../styles/useTheme'

import api from '../../services/api'
import SwitchComponent from '../../components/SwitchComponent'

import { Container, Wrapper, Body, Attachments, Text, Subtitle, Title, Content, SwitchContainer , Error} from './styles';

interface Params {
  id: string;
}

interface EmailProps {
  id: string;
  to: string;
  subject: string;
  body: string;
  attachments: Array<{
    url: string;
    name: string;
  }>
}

const Detail: React.FC = () => {
  const params = useParams<Params>()
  const [email, setEmail] = useState<EmailProps>()
  const [error, setError] = useState<boolean>(false)
  const { toggleTheme } = useTheme()

  const user_id = localStorage.getItem('token')

  useEffect(() => {
    try {
      api.get(`/email/${params.id}`, {
        headers: {
          Authorization: user_id
        }
      }).then(response => {
        setEmail(response.data)
      })
    } catch (error) {
      setError(true)
    }
  }, [params.id])

  if(error) {
    return <Error>Algo deu Errado, Tente Novamente</Error>
  }


  if(!email) {
    return <Loader
      type="Bars"
      color="#00BFFF"
      height={100}
      width={100}
    />
  }

  return (
    <Container>
      <Title>Email View</Title>

      <SwitchContainer>
        <SwitchComponent toggleTheme={toggleTheme}/>
      </SwitchContainer>

      <Wrapper>
        <Text>Para: {email.to}</Text>
        <Text>Assunto: {email.subject}</Text>
        <Body>{email.body}</Body>
        { email.attachments.length === 0 ? null :  (
        <Attachments>
          <Subtitle>Anexos</Subtitle>

          {email.attachments.map(file => {
            return (
              <Content>
                  <span>{file.name}</span>
                  <a target='_blank' rel='noopener noreferrer' href={file.url}>View</a>
              </Content>
            )
          })} 
        </Attachments>)}
      </Wrapper>

      <Link to='/dashboard' className='link'>
          <FiArrowLeft/>
          Voltar para Home
      </Link>
    </Container>
  )
};

export default Detail;
