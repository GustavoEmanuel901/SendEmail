import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Input from '../../components/Input';
import SwitchComponent from '../../components/SwitchComponent';
import { useTheme } from '../../styles/useTheme'
import api from '../../services/api'

import Logo from '../../assets/Local.png'

import { Container, Content, Infos, Form, Image, Title, Subtitle, Button, SwitchContainer } from './styles';

const Register: React.FC = () => {
  const { toggleTheme } = useTheme()

  const [name, setName] = useState<string>('')
  const [user_name, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [conPassword, setConPassword] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')

  const history = useHistory()

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    try {

      if(password.length < 8) {
        return alert('Senha muito curta, minimo de 8 caracters')
      }

      if(user_name.length > 20) {
        return alert('Nome de Usuário, muito Longo máximo de 20 caracters')
      }

      if(password !== conPassword) {
        return alert('Erro ao confirma senha, altere os campos!')
      }

      const data = {
        name, 
        user_name, 
        password,
        keyword
      }

      const response = await (await api.post('/user', data)).data
      localStorage.setItem('token', response.id)
      history.push('/dashboard')
      console.log(response)
    } catch (error) {
      if(error.message === 'Request failed with status code 401'){
        return alert('Palavra Chave Incorreta')
      } else if (error.message === 'Request failed with status code 406') {
        return alert('Nome de Usuário já Existe.')
      }

      alert('Erro ao cadastrar, verifique os campos e tente novamente')
    }
  }

  return (
    <Container>
      <SwitchContainer>
        <SwitchComponent toggleTheme={toggleTheme}/>
      </SwitchContainer>
      <Content>
         <Infos>
           <Image src={Logo} alt='Logo'/>
           <Title>Cadastre-se</Title>
           <Subtitle>Preencha todos os campos ao lado para enviar seus emails de forma prática.</Subtitle>
           <Link to='/' className='link'>
              <FiArrowLeft/>
              Voltar para Login
           </Link>
         </Infos>
         <Form onSubmit={handleRegister}>
           <Input 
              placeholder='Nome Completo'
              value={name}
              onChange={e => setName(e.target.value)}  
            />
           <Input 
              placeholder='Nome de Usuário'
              value={user_name}
              onChange={e => setUserName(e.target.value)}
            />
           <Input 
              placeholder='Palavra Chave' 
              type='password'
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            />
           <Input 
              placeholder='Senha' 
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
           <Input 
              placeholder='Confirme sua Senha' 
              type='password'
              value={conPassword}
              onChange={e => setConPassword(e.target.value)}
            />
           <Button type='submit'>Cadastre-se</Button>
         </Form>
      </Content>
    </Container>
  );
};

export default Register;
