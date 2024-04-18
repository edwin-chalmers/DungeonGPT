import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledNav = styled.nav`
    ${centerElements}
    flex-direction: column;
    width: 100%;

    font-weight: 800;

    h1 {
        margin: 10px 0 5px 0;
        font-size: large;
    }

    img {
        width: 20px;
    }

    .health {
        margin: 10px;
    }
`