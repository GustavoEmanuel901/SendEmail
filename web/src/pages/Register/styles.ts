import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const SwitchContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
`;

export const Content = styled.div`
    width: 80vw;
    padding: 20px;
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'IN FO';
`;

export const Infos = styled.div`
    grid-area: 'IN';

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .link {
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }

        svg { 
            margin-right: 8px;
            color: ${props => props.theme.colors.secondary}
        }
    }
`;

export const Image = styled.img`
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
`;

export const Subtitle = styled.p`
    max-width: 300px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 300;
    margin: 20px 0;
`;


export const Form = styled.form`
    grid-area: 'FO';
`;

export const Button = styled.button`
    width: 100%;
    height: 56px;
    margin-top: 32px;
    font-weight: bold;
    font-size: 14px;
    background: ${props => props.theme.colors.secondary};
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 8px;
    transition: 400ms;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
