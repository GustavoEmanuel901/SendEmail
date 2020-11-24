import React, { FormEvent, useState } from 'react';
import { AiOutlineImport } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input';
import SwitchComponent from '../../components/SwitchComponent';
import { useTheme } from '../../styles/useTheme'
import api from '../../services/api'

import Local from '../../assets/Local.png';

import { Container, Content, Title, Button, Info, Image, SwitchContainer } from './styles';

const Login: React.FC = () => {
  const { toggleTheme } = useTheme()

  const [user_name, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory()

  async function handleLogin(e: FormEvent){
    e.preventDefault()

    try {
      const data = {
        user_name,
        password
      }
  
      const response = (await api.post('/session', data)).data
      localStorage.setItem('token', response.user_id)
      history.push('/dashboard')
    } catch (error) {
      alert('Algo deu Errado, Verifique os Campos e Tente Novamente')
    }
  }

  return (
    <Container>
      <Image src={Local} alt='Logo'/>
      <SwitchContainer>
        <SwitchComponent className='switch' toggleTheme={toggleTheme}/>
      </SwitchContainer>
      <Content onSubmit={handleLogin}>
        <Title>Faça seu Login</Title>
        <Input 
            name='Nome de Usuário'
            type='text' 
            placeholder='Nome de Usuário'
            value={user_name}
            onChange={e => setUserName(e.target.value)}
            />
        <Input 
            name='Senha' 
            type='password' 
            placeholder='Senha'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        <Button type='submit'>Login</Button>
        <Info>
          <Link to='/register' className='link'>
            <AiOutlineImport size={20}/>
            Cadastre-se
          </Link>
        </Info>
      </Content>
    </Container>
  );
};

export default Login;
