import React from 'react';
import { StyledHeader, StyledButton, StyledInput, StyledLogoImage } from './styled';
import Logo from '../../containers/images/logofutureTube.png';

function Header (props) {
    return (
        <StyledHeader>
            <StyledLogoImage src={Logo}/>
            <StyledInput/>
            <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
        </StyledHeader>
    )
}

export default Header;