import styled from "styled-components";

export const CheckoutSummaryContainer = styled.section`
    width: 100%;
    flex: 0 0 40%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['base-card']};
    gap: 2rem;
    font-family: 'Baloo 2', sans-serif;
`;

export const CheckoutProductContainer = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    hr {
        border: 0.5px solid ${props => props.theme['base-button']};
        width: 100%;
    }
`;

export const CheckoutProductList = styled.li`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.125rem;

    img {
        width: 64px;
        height: 64px;
    }
`;

export const ProductActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        font-size: 0%.875rem;
        color: ${props => props.theme['base-subtitle']};
        font-weight: 400;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
    gap: 0.5rem;  
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    section:nth-child(2),
    section:first-child {
        background: ${props => props.theme['base-button']};
        border-radius: 8px;
        padding: 0.25rem;
    }

    section:nth-child(2) {        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
        }
    }
    
    span {
        padding: 3px;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 3px;
        text-transform: uppercase;
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
        
        svg {
            color: ${props => props.theme['purple-dark']};
        }
        
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const ProductPrice = styled.span`
    padding-top: 3px;
    font-weight: 700;
    min-width: 61px;
`;

export const SubtotalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-family: 'Baloo 2', sans-serif;
        
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid ${props => props.theme['base-button']};
        }
    }    
`;

const BaseButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    width: 100%;
    padding: 0.75rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 700;
`;

export const CheckoutButton = styled(BaseButton)`    
    
    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    text-transform: uppercase;

    &:hover {
        background: ${props => props.theme['yellow-dark']};
    }

    &:disabled {
        background: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['base-text']};
            
    }
    
`;

export const ClearCartBtn = styled(BaseButton)`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['base-text']};
    text-transform: uppercase;

    &:hover {
        color: ${props => props.theme['white']};
        background: ${props => props.theme['purple-dark']};
        opacity: 0.9;
    }
`;