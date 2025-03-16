import styled from "styled-components";

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

export const PaymentSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.675rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const PaymentOption = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 400;

    &:hover {
        background: ${props => props.theme['base-hover']};
        color: ${props => props.theme['base-subtitle']};
    }

    input[type="radio"] {
        display: none;
    }
    
    input[type="radio"]:checked + label {
        border: 1px solid ${props => props.theme['purple-dark']};
    }

    label {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 400;

        svg {
            margin-right: 0.5rem;
        }
    }
`;