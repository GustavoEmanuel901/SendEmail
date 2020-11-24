import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    position: relative;
`;

export const SwitchContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
`;

export const Image = styled.img`
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

export const Content = styled.form`
    width: 500px;
    height: 100%;
    border-radius: 8px;
    padding: 20px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

export const Info = styled.div`
    .link {
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        margin-bottom: 12px;

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