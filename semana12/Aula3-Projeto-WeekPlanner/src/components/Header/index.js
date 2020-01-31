import React from 'react';
import { StyledHeader, PageName, TitleContainer } from '../../style/styled'


function Header () {
    return (
        <StyledHeader>
            <TitleContainer>
                <PageName>W E E K </PageName>
                <PageName>P L A N N E R</PageName>
            </TitleContainer>
        </StyledHeader>
    )
}

export default Header;