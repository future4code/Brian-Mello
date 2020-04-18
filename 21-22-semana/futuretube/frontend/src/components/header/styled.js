import styled from 'styled-components';

// containers

export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 80px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #660008;
    color: white;
    @media (max-width: 600px) {
        height: 330px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`
export const StyledLogo = styled.img `
    width: 130px;
    height: 100%;
    margin: 0;
    :hover {
        cursor: pointer;
        opacity: 80%;
    }
`

export const LogoContainer = styled.div `
    width: 130px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    @media (max-width: 300px) {
        height: 100px;
    }
`

export const SearchContainer = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-left: 100px;
    @media (max-width: 600px){
        width: 100%;
        height: 80px;
        padding: 0;
    }
`

export const ButtonMenu = styled.menu `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 10px;
    @media (max-width: 600px){
        width: 100%;
    }
    @media(max-width: 300px){
        height: 140px;
        flex-direction: column;
    }
`

// button 

export const StyledButton = styled.button `
    width: 100px;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: #3c0000;
    border-radius: 5px;
    color: white;
    :hover {
        cursor: pointer;
        background-color: white;
        border: 1px solid #3c0000;
        color: #3c0000;
    }
    @media(max-width: 300px){
        width: 60%;
    }
`

// inputs

export const StyledInput = styled.input `
    width: 70%;
    height: 20px;
    border: 0;
    margin: 0;
    background-color: #660008;
    border-bottom: 1px solid white;
    color: white;
    outline: none;
    @media (max-width: 600px){
        width: 90%;
    }
`