import styled from 'styled-components';

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