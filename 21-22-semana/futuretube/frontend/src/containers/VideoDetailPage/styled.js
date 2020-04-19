import styled from 'styled-components';
import UpdateIcon from '@material-ui/icons/Update';

export const StyledUpdateIcon = styled(UpdateIcon)`
    :hover{
        cursor: pointer;
        color: gray;
    }
`

export const StyledMain = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    background-color: #dbdbd3;
    padding: 25px 35px 25px 35px;
    display: flex;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 600px){
        
    }
`

export const StyledIFrame = styled.iframe `
    width: 100%;
    height: 580px;
    background-color: black;
    outline: 0;
    border: 0;
`

export const VideoSettingsContainer = styled.div `
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const FeedOfVideosContainer = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
`

export const TitleAndUpdateContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 0;
    border-bottom: 1px solid #b7b7b1;
`

export const UsersInformation = styled.div `
    width: 100%;
    min-height: 80px;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledUserImage = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: black;
    border: 0;
    outline: 0;
`
export const DescriptionContainer = styled.div `
    width: 100%;
    min-height: 200px; 
    padding: 0 20px 0 0;
    border-bottom: 1px solid #b7b7b1;
`

// text
export const StyledH2 = styled.h2`
    margin: 0;
    padding: 0;
`

export const StyledUserName = styled.h3`
    margin: 0;
    padding: 0;
    margin-left: 10px;
`

export const StyledH3 = styled.h3`
    margin: 0;
    padding: 0;
`

export const StyledP = styled.p`
    margin: 25px 0 0 0;
    padding: 0 20px 0 60px;
    font-size: 15px;
`