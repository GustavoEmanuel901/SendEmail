import React from 'react';
import { Link, useHistory} from 'react-router-dom';

import SwitchComponent from '../SwitchComponent';
import { useTheme } from '../../styles/useTheme'

import Logo from '../../assets/Local.png'

import { Container, Image, Infos, Logout, IconLogout } from './styles';

const Navbar: React.FC = () => {

  const { toggleTheme } = useTheme()

  const history = useHistory()

  function handleLogout() {
    localStorage.removeItem('token')

    history.push('/')
  }

  return (
    <Container>
      <Image src={Logo} alt='Logo' />
      <Link to="/email/create" className='button'>
        Escreva um Novo Email
      </Link>

      <Infos>
        <Logout onClick={handleLogout}>
          <IconLogout/>
        </Logout>
        <SwitchComponent toggleTheme={toggleTheme}/>
      </Infos>
    </Container>
  );
};

export default Navbar;
