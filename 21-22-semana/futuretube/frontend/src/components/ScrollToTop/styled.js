import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const ScrollToTopContainer = styled.div `
    width: 20px;
    height: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px){
        bottom: 5px;
        right: 5px;
    }
`
export const StyledExpandLessIcon = styled(ExpandLessIcon)`
    :hover{
        cursor: pointer;
        color: gray;
    }
`