import styled, { keyframes } from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const StyledHeader = styled.header `
    width: 100%;
    min-height: 100px;
    background-color: #4e342e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;

`

export const FormSection = styled.div `
    width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #7b5e57;

`
export const DaysContainer = styled.main `
    width: 100%;
    min-height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #7b5e57;

`  

export const StyledMain = styled.main `
    width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #7b5e57;
    position: absolute;
    top: 120px;

` 

export const StyledButton = styled(Button) `
    cursor: pointer;
    color: white;
    width: auto;
    background-color: #4e342e;
    margin: 5px;
    outline: 0;
    border: 0;
    :hover {
        border-bottom: 1px solid white;
    }
`

export const Container = styled.div `
    width: 100%;
    min-height: 689px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #7b5e57;
    font-family: 'Bangers', cursive;
    
`

export const CreateActivityContainer = styled.div `
    width: 300px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 5px;
    margin: 10px;
    background-color: white;
    :hover {
        box-shadow: 0px 0px 10px;
    }
`

export const PageName = styled.h1 `
    color: white;
`

export const TitleContainer = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 400) {
        flex-direction: column
    }
`

// loader animado 

export const Loading = styled.text `
    font-size: 9px;
    text-align: center;
`

const dash = keyframes  `
    100% { stroke-dashoffset: 136; }
`

export const Triangle = styled.polygon`
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`

export const FormWrapper = styled.form`
    width: 100%;
    height: auto;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    color: white;
`;

export const StyledSearchTextField = styled(TextField)`
    color: white;
    margin: 20px;
`

export const TasksContainer = styled.div `
    width: 200px;
    min-height: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: 10px;
    :hover{
        box-shadow: 0 0 10px;
    }
`

export const TasksContainerHeader = styled.header `
    width: 100%;
    height: 30px;
`
export const TasksContainerMain = styled.main `
    width: 100%;
    min-height: 100%;
`

export const StyledSelect = styled.select `
    width: 90%;
    height: 30px;
    border-radius: 5px;
    outline: 0;
    text-align: center;
    padding: 0 10px 0 25px;
    :hover {
        cursor: pointer;
    }
`

export const StyledHr = styled.hr `
    width: 90%;
    color: gray;
    margin: 5px;
    opacity: 50%;
`



