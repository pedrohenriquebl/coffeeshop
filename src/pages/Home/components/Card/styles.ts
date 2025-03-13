import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['base-card']};
    padding: 1.25rem 1.5rem;
    border-radius: 2% 25% 2% 25%;
    max-width: 256px;
    height: 310px;

    img {
        position: relative;
        top: -10%;
    }

    @media screen and (max-width: 1024px) {
        height: 100%;
    }
 `;

export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    span {
        border-radius: 20px;
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        font-weight: 500;
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const Title = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
        margin-bottom: 0.5rem;
    }
`;

export const Description = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.theme['base-label']};

    @media screen and (max-width: 768px) {
        margin-bottom: 0.875;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    button {
        border: none;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
    }

    strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 0.875rem;
    }
`;

export const ActionQty = styled.div`
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    background: ${props => props.theme['base-button']};
    padding: 0.5rem;
    border-radius: 6px;

    @media screen and (max-width: 768px) {        
        width: 50%;
        justify-content: center;
    }

    button {
        cursor: pointer;
        background: transparent;
        color: ${props => props.theme['purple-dark']};

        @media screen and (max-width: 768px) { 
            padding: 0 1rem;
        }
    }
`;

export const CartButton = styled.button`
    height: 38px;
    cursor: pointer;
    padding: 0.5rem;
    background: ${props => props.theme['purple']};
    color: ${props => props.theme['white']};
    border-radius: 6px;
    border: none;
    transition: background 0.3s;

    &:hover {
        background: ${props => props.theme['purple-dark']};
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;