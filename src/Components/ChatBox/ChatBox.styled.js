import styled from 'styled-components'

export const StyledChatBox = styled.div`
    width: 100%;        // Make it fill the container
    max-width: 800px;   // But not more than 800px
    min-height: 50px;
    max-height: 200px;
    border: 1px solid var(--secondary-color);
    box-sizing: border-box;
    background-color: rgba(0,0,0,0);
    margin-bottom: 20px;
    border-radius: 15px;
    padding-left: 10px;
    
    display: flex;
    align-items: center;
    justify-content: right;
    
    textarea {
        box-sizing: border-box;
        background-color: rgba(0,0,0,0);
        width: 100%;
        border: none;
        color: var(--main-color);
        resize: none;
        outline: none;
        padding: 13px 0 0 0;
    }

    &:focus-within {
    border-color: var(--main-color);
    }

`

export const EnterButton = styled.button`
    --main-color: #8BE8D7;
    --secondary-color: #39615A;
    --background-color: #283134;

    width: 35px;
    height: 35px;
    background-color: rgba(0,0,0,0);
    border: 1px solid var(--secondary-color);
    border-radius: 12px;
    margin-right: 10px;
    color: var(--background-color);
    background-color: var(--secondary-color);
    font-weight: 800;

    background-color: ${props => props.disabled ? 'var(--secondary-color)' : 'var(--main-color)'};
    cursor: ${props => props.disabled ? '' : 'pointer'}
`