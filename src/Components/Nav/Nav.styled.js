import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledNav = styled.nav`
    ${centerElements}
    flex-direction: column;
    width: 800px;

    font-weight: 800;

    h1 {
        margin: 10px 0 5px 0;
    }

    img {
        width: 20px;
    }

    .health {
        margin: 10px;
    }
`