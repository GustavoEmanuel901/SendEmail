import styled from 'styled-components';

export const Container = styled.div`
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

export const Wrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    width: 500px;

    display: flex;
    flex-direction: column;
    border-radius: 4px;
`;

export const SwitchContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
`;

export const Title = styled.h1`
    font-size: 30px;
    margin: 20px 0;
`;


export const Attachments = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.span`
    font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

export const Body = styled.p`
    font-size: 16px;
    text-align: justify;
    line-height: 25px;
    padding: 10px;
`;

export const Subtitle = styled.h3`
    padding: 10px;
    font-size: 20px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 500;
        font-size: 14px;
        max-width: 400px;
    }

    a { 
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        font-weight: bold;

        &:hover {
            opacity: 0.7;
            text-decoration: underline;
        }
    }
`;

export const Error = styled.h1`
    color: ${props => props.theme.colors.text};
    font-size: 30px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

