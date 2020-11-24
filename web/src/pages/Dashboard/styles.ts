import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'

export const Container = styled.div`
    max-width: 100vw;
`;

export const Error = styled.h1`
    color: ${props => props.theme.colors.text};
    font-size: 30px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px 10px;

    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    padding-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 230px;
    height: 32px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.text};
    outline: 0;
    padding: 10px;
    font: 16px Roboto;
`;

export const SearchIcon = styled(BsSearch)`
    width: 32px;
    height: 20px;
    color: ${props => props.theme.colors.text};
`

export const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg { 
        margin-right: 10px;
    }
`;