import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import SwitchComponent from '../../components/SwitchComponent'
import { useTheme } from '../../styles/useTheme'
import api from '../../services/api'

import Logo from '../../assets/Local.png'

import { Container, Form, Title, Subtitle, TextArea, Button, InputBlock, Input, InputFile, Image, SwitchContainer } from './styles';

const SendEmail: React.FC = () => {
  const { toggleTheme } = useTheme()

  const history = useHistory()

  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const user_id = localStorage.getItem('token')

  function handleSelectFiles(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files){
      return;
    }

    const selectedImages = Array.from(event.target.files)

    setFiles(selectedImages)
  }

  async function  handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const data = new FormData()

      data.append('to', to)
      data.append('subject', subject)
      data.append('text', text)

      files.forEach(file => {
        data.append('files', file)
      })

      console.log(data.values)

      await api.post('/email', data, { 
        headers: { 
          Authorization: user_id
        }
      })

      alert('E-mail Enviado com sucesso')

      history.push('/dashboard')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container>
      <Image src={Logo} alt="Logo"/>
      <SwitchContainer>
        <SwitchComponent className='switch' toggleTheme={toggleTheme}/>
      </SwitchContainer>

      <Form onSubmit={handleSubmit}>
        <Title>Enviar Email</Title>
        <Subtitle>Preencha os Campos para enviar o Email</Subtitle>

        <InputBlock>
          <Input 
            placeholder='Para'
            value={to}
            type='email'
            onChange={e => setTo(e.target.value)}
          />
          <Input 
            placeholder='Assunto'
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
        </InputBlock>

        <TextArea 
          placeholder='Escreva o corpo do Email, se for necessário.'
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <InputFile multiple onChange={handleSelectFiles} type='file'/>
        <Button type='submit'>Enviar</Button>

        <Link to='/dashboard' className='link'>
          <FiArrowLeft/>
          Voltar para Home
        </Link>
      </Form>
    </Container>
  );
};

export default SendEmail;
