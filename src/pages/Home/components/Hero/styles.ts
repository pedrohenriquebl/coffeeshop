import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    margin-top: 5.5rem;
`

export const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: space-between;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2.5rem;
        line-height: 1.3;
        font-weight: 900;
        margin-bottom: 1rem;

        color: ${props => props.theme['base-title']};
    }   

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        list-style: none;
        margin-top: 2rem;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            img {
                width: 24px;
                height: 24px;
            }
        }
    }
`