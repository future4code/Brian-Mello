import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: #a50f1e;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled.button `
    width: 120px;
    height: 30px;
    border-radius: 5px;
    border: #a50f1e;
    background-color: white;
    color: #a50f1e;
    position: fixed;
    top: 20px;
    right: 20px;
    :hover{
        background-color: #6f0000;
        color: white;
    }
`

export const StyledInput = styled.input`
    min-width: 500px;
    height: 25px;
    outline: none;
    border: 0;
    position: fixed;
    top: 20px;
    color: black;
    border-bottom: 1px solic white;
    border-radius: 5px;
    padding-left: 30px;
`

export const StyledLogoImage = styled.img`
    width: 80px;
    height: 60px;
    position: fixed;
    left: 40px;
    top: 5px;
`