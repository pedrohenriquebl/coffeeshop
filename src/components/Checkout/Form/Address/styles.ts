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
