import styled from 'styled-components';

// Container
export const StyledMain = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    background-color: #dbdbd3;
    display: flex;
    @media (max-width: 600px){
        flex-direction: column;
    }
`

export const MenuContainer = styled.menu `
    width: 10%;
    min-width: 100px;
    border-right: 1px solid #c4c4be;
    display: flex;
    flex-direction: column;
    padding: 5px;
    @media (max-width: 600px) {
        width: 100%;
        border-right: 0;
    }
`

export const FeedContainer = styled.section `
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FeedContainerHeader = styled.section `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
        height: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FeedTitleContainer = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 5px;
    @media (max-width: 600px) {
        height: 60px;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
`

export const FeedOrderSelectContainer = styled.div `
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    @media (max-width: 600px) {
        height: 60px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

// text

export const StyledP = styled.p `
    width: 100%;
    height: 20px;
    margin: 0;
    border-bottom: 1px solid #c4c4be;
    margin-bottom: 5px;
    font-weight: 700px;
    :hover{
        cursor: pointer;
        background-color: #c4c4be;
    }
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
    }
`

export const FeedTitle = styled.h1 `
    width: auto;
    height: 20px;
    font-weight: 900px;
    font-size: 25px;
`