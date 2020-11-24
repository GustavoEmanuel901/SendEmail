import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 24px
  }
`;


export const InputElement = styled.input`
    width: 100%;
    height: 56px;
    margin-top: 8px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.text};
    outline: 0;
    padding: 0 16px;
    font: 16px Roboto;
`;