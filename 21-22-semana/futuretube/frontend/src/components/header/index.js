import React from 'react';
import { StyledHeader, StyledLogo, LogoContainer, SearchContainer, ButtonMenu, StyledButton, StyledInput } from './styled';
import logo from '../../images/logoLabenu.png'

export function Header (props) {
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={logo} onClick={props.onClick}/>
            </LogoContainer>
            <SearchContainer>
                <StyledInput value={props.value} onChange={props.onChange} placeholder="Search"/>
            </SearchContainer>
            <ButtonMenu>
                <StyledButton onClick={props.onClick1}>{props.button1}</StyledButton>
                <StyledButton onClick={props.onClick2}>{props.button2}</StyledButton>
            </ButtonMenu>
        </StyledHeader>
    )
}

export default Header;