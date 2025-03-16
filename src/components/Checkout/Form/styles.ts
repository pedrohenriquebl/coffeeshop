import styled from "styled-components";

export const FormTitle = styled.h2`
    font-family: 'Baloo 2', sans-serif;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2.5rem;

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: none;
    }

    @media screen and (max-width: 768px) {
        padding-top: 2rem;
    }

    svg {
        color: ${props => props.theme['purple-dark']};        
    }

    button {
        cursor: pointer;
        border: none;
        border-radius: 8px;
        width: 100%;
        padding: 0.75rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 700;
        background: ${props => props.theme['purple']};
        color: ${props => props.theme['white']};
        text-transform: uppercase;

        &:hover {
            background: ${props => props.theme['purple-dark']};
        }
    }
`;

export const Headline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.25rem;
    padding-bottom: 1rem;

    p {
        color: ${props => props.theme['base-text']};
        font-weight: 400;
        font-size: 0.875rem;
        padding-left: 2rem;
    }    

    #localization {
        color: ${props => props.theme['yellow-dark']};
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    h2 {
        color: ${props => props.theme['base-subtitle']};
        font-weight: 500;
        font-size: 1rem;
    }
`;

export const ClipLoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
`;