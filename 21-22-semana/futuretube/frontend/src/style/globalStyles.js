import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export const StyledWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: #c4c4be;
  color: black;
  font-family: 'Manrope', sans-serif;
`;

export const StyledButtonForms = styled(Button) `
    cursor: pointer;
    color: black;
    width: auto;
    font-family: 'Manrope', sans-serif;
    :hover {
        border: 1px solid white;
        background-color: #c4c4be;
    }
`

export const FormPasswordContainer = styled.div`
    display: flex;
    width: 200px;
    height: auto;
    justify-content: space-between;
    align-items: flex-end;
`

export const StyledTextField = styled(TextField)`
    background-color: #c4c4be;
    color: black;
`

export const BodyContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const StyledVisibilityOffIcon = styled(VisibilityOffIcon)`
    width: 20px;
    height: 20px;
    :hover{
        cursor: pointer;
    }
`

export const StyledVisibilityIcon = styled(VisibilityIcon)`
    width: 20px;
    height: 20px;
    :hover{
        cursor: pointer;
    }
`