import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    section {
        display: flex;
        gap: 0.75rem;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 8px;
    padding: 0.5rem;
    
    background: ${props => props.theme['purple-light']};

    img {
        width: 20px;
        height: 22px;
    }

    span {
        color: ${props => props.theme['purple-dark']};
    }
`

export const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 8px;
    padding: 0.5rem;

    background: ${props => props.theme['yellow-light']};

    img {
        width: 25px;
        height: 25px;
    }
`

export const CartQty = styled.span`
    padding: 5px;
    font-size: 0.75rem;
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['yellow-light']};
    font-weight: 500;
    border-radius: 50%;
    width: 24px;
    text-align: center;
    position: relative;
    top: -2px;
`