import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 2.5rem 2rem;
    margin-top: 3rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListTitle = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
`;