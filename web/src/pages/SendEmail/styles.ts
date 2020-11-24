import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const Image = styled.img`
    margin-bottom: 10px;
`;

export const SwitchContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
`;

export const Form = styled.form`
    width: 60%;
    height: 100%;
    border-radius: 8px;
    padding: 20px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        margin-top: 20px;

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

export const Title = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 10px;
`;

export const InputBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.text};
    outline: 0;
    padding: 0 16px;
    font: 16px Roboto;

    & + & {
        margin-left: 10px;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    max-width: 780px;
    min-width: 780px;
    height: 150px;
    max-height: 400px;
    min-height: 100px;
    margin: 10px 0;
    outline: 0;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 8px;
    font: 16px Roboto;
    padding: 10px;
`;

export const InputFile = styled.input`
    font: 16px Roboto;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    outline: 0;
    border: 0;
    margin: 10px 0;
`;

export const Button = styled.button`
    width: 80%;
    height: 40px;
    margin-top: 8px;
    border-radius: 20px;
    border: 0;
    outline: none;
    background: ${props => props.theme.colors.secondary};
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    transition: 400ms;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;