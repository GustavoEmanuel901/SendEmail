import React from 'react';
import { useHistory } from 'react-router-dom'

// import api from '../../services/api'

import { Container, First, To, Subject, Second, Text, Final, IconWrapper, DeleteIcon, CodeIcon } from './styles';

interface EmailProps {
  subject: string;
  to: string;
  text: string;
  id: string;
  deleteEmail(): void;
}

const Email: React.FC<EmailProps> = ({ subject, to, text, deleteEmail, id }) => {

  const history = useHistory()


  function viewDetail(emailId: string) {
    history.push(`email/${emailId}`)
  }

  return (
    <Container>
      <First>
        <Subject>{subject}</Subject>
        <To>Para: {to}</To>
      </First>

      <Second>
        <Text>{text}</Text>
      </Second>

      <Final>
        <IconWrapper
          type='button'
          onClick={() => viewDetail(id)}
        >  
          <CodeIcon/>
        </IconWrapper>
        <IconWrapper 
          type='button'
          onClick={() => deleteEmail()}
        >
          <DeleteIcon/>
        </IconWrapper>
      </Final>
    </Container>
  );
};

export default Email;
