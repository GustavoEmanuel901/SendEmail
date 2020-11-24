import styled from 'styled-components';

import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    max-width: 1335px;
    margin: 0 5px;

    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 4px;
    transition: 400ms;

    & + & {
        margin-top: 10px;
    }

    &:hover {
        background: ${props => props.theme.colors.secondary};
        color: #fff;
        border-radius: 8px;

        button {
            border-color: #fff;

            svg { 
                color: #fff
            }
        }
    }
`;

export const First = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subject = styled.h3`
    margin-bottom: 10px;
    font-size: 20px;
`;

export const To = styled.span`
    font-size: 14px;
    font-weight: 500;
`;

export const Second = styled.div`
    max-width: 700px;
`;

export const Text = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 300;
    font-size: 14px;
`;

export const Final = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconWrapper = styled.button`
    border: 0;
    outline: 0;
    border-radius: 50%;
    background: none;
    border: 1px solid ${props => props.theme.colors.secondary};
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 600ms;

    & + & {
        margin-left: 10px;
    }

    &:hover {
        opacity: 0.7;
        background: ${props => props.theme.colors.secondary};
        cursor: pointer;
        border-radius: 8px;

        svg { 
            color: #fff;
        }
    }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
    color: ${props => props.theme.colors.secondary};
    height: 20px;
    width: 20px;
`;

export const CodeIcon = styled(BiCodeAlt)`
    color: ${props => props.theme.colors.secondary};
    height: 20px;
    width: 20px;
`;

