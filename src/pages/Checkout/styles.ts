import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        flex: 1;        
        align-items: center;
    }
`;

export const CheckoutFormContainer = styled.section`
    flex: 0 0 60%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['base-card']};

    @media screen and (max-width: 768px) {
        min-width: 100%;
    }
`;