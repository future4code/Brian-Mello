import React from 'react';
import { StyledHeader, StyledLogo, LogoContainer, SearchContainer, ButtonMenu, StyledButton, StyledInput } from './styled';
import labenutube from '../../images/Labenutube2.png';

export function Header (props) {
    
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={labenutube} onClick={props.onClick}/>
            </LogoContainer>
            <SearchContainer>
                <StyledInput value={props.value} onChange={props.onChange} placeholder="Search"/>
            </SearchContainer>
            <ButtonMenu>
                {props.button1 && <StyledButton onClick={props.onClick1}>{props.button1}</StyledButton>}
                {props.button2 && <StyledButton onClick={props.onClick2}>{props.button2}</StyledButton>}
                {props.button3 && <StyledButton onClick={props.onClick3}>{props.button3}</StyledButton>}
            </ButtonMenu>
        </StyledHeader>
    )
}

export default Header;