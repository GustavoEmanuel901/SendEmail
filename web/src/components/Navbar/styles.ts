import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .button {
        width: 200px;
        height: 50px;
        background: ${props => props.theme.colors.secondary};

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: 400ms;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }
`;

export const Image = styled.img``;

export const IconLogout = styled(FiLogOut)`
    color: ${props => props.theme.colors.secondary};
    transition: 400ms;
`;

export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
`;

export const Logout = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    margin-right: 10px;
    outline: 0;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.secondary};
    transition: 400ms;

    &:hover {
        background: ${props => props.theme.colors.secondary};
        opacity: 0.7;
        cursor: pointer;
        
        svg { 
            color: ${props => props.theme.colors.primary};
        }
    }
`;
