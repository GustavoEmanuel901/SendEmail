import React, { InputHTMLAttributes } from 'react'
import { Container, InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    name?: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    return (
      <Container>
          <InputElement id={name} {...rest}/>
      </Container>
    )
}

export default Input;