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

export const GroupForm = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.675rem;
    position: relative;

    &[data-optional='optional'] {
        &::after {
            content: "Opcional";
            font-size: 0.875rem;
            font-style: italic;
            position: absolute;
            left: 85%;
            top: 12px;
            color: ${props => props.theme['base-label']};

            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }    
`;

export const BaseInput = styled.input`
    width: 100%;
    min-width: 0;
    height: 42px;
    padding: 0.625rem;
    border-radius: 4px;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-hover']};
    color: ${props => props.theme['base-text']};

    @media screen and (max-width: 480px) {
        flex: 1 !important;
        max-width: 100% !important;
    }
 
    &::placeholder {
        color: ${props => props.theme['base-label']};
    }

    &.active,
    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }
`;

export const CepInput = styled(BaseInput)`
    max-width: 200px;
`;

export const NumberInput = styled(BaseInput)`
    flex: 0 0 30%;
`;

export const ComplementInput = styled(BaseInput)`
    flex: 0 0 67%;    
`;

export const DistrictInput = styled(BaseInput)`
    flex: 0 0 33%;
`;

export const CityInput = styled(BaseInput)`
    flex: 0 0 50%;
`;  

export const UfInput = styled(BaseInput)`
    flex: 0 0 12%;
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
