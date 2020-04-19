import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const StyledContainer = styled.div `
    width: 250px;
    min-width: 200px;
    max-width: 250px;
    height: 250px;
    background-color: #efecec;
    margin: 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Manrope', sans-serif;
    :hover {
        cursor: pointer;
    }
`

export const VideoFooterContainer = styled.div `
    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 0;
    padding: 5px;
`
export const StyledTitle = styled.h4 `
    margin: 0;
    padding: 0;
`

export const StyledP = styled.p `
    margin: 0;
    padding: 0;
    color: #93938f;
    font-weight: 500;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 150px;
    min-height: 60%;
`

export const DeleteContainer = styled.div`
    width: 100%;
    height: 20px;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
    margin: 0;
`
export const DeleteButton = styled.div `
    width: 20px;
    height: 100%;
    color: red;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    :hover {
        background-color: red;
        color: white;
    }
`

export const TrashIcon = styled(DeleteForeverIcon)`
    color: black;
    :hover{
        color: red;
        opacity: 90%;
    }
`