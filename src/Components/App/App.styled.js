import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledApp = styled.div`
    --main-color: #8BE8D7;
    --secondary-color: #39615A;
    --background-color: #283134;


    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #8BE8D7;
`

export const Nav = styled.nav`
    width: 800px;
    height: 50px;
    font-weight: 800;
    ${centerElements}
`

export const PlayerInfo = styled.div`
    top: 50%;
    left: 10%;

    width: 250px;
    height: 250px;
    border: 1px solid red;
    box-sizing: border-box;

    text-align: right;
    position: absolute;
`

