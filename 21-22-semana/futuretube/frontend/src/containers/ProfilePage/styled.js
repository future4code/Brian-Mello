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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    font-family: 'Manrope', sans-serif;
`

export const ProfileContainer = styled.div`
    width:90%;
    max-width: 500px;
    min-height: 350px;
    @media (max-width: 600px) {
        min-height: 450px;
    }
`

export const PhotoContainer = styled.div `
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserPhoto = styled.img `
    width: 150px;
    height: 150px;
    border: 0;
    outline: 0;
    border-radius: 75px;
`

export const NameAndTypeContainer = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    border-bottom: 1px solid #b7b7b1;
    @media (max-width: 600px){
        height: 100px;
        flex-direction: column;
        border-bottom: 0;
    }
`

export const NameContainer = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 600px){
        padding: 0;
        width: 100%;
        border-bottom: 1px solid #b7b7b1;
    }
`

export const TypeContainer = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 0 0 10px;
    @media (max-width: 600px){
        padding: 0;
        width: 100%;
        border-bottom: 1px solid #b7b7b1;
    }
`
export const EmailAndBirthdateContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid #b7b7b1;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 600px){
        height: 100px;
        flex-direction: column;
        border-bottom: 0;
    }
`
export const EmailContainer = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 600px){
        padding: 0;
        width: 100%;
        border-bottom: 1px solid #b7b7b1;
    }
`

export const BirthdateContainer = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 0 0 10px;
    @media (max-width: 600px){
        padding: 0;
        width: 100%;
        border-bottom: 1px solid #b7b7b1;
    }
`

export const PasswordContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid #b7b7b1;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 600px){
        height: 50px;
        flex-direction: column;
    }
`
export const Password = styled.div `
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 600px){
        padding: 0;
        width: 95%;
    }
`

export const UpdatePasswordIcon = styled.div `
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media (max-width: 600px){
        padding: 0;
        width: 5%;
    }
`

export const UserVideosContainer = styled.div `
    width:90%;
    max-width: 900px;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px){
        max-width: 500px;
    }
`

export const MyVideosContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
// text
export const StyledH2 = styled.h2 `
    margin: 0
`