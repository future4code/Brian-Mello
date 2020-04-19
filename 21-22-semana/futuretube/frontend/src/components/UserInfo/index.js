import React, { Fragment } from 'react';
import { LabelContainer, StyledP } from './styled';

export function UserInfo (props){
    return(
        <Fragment>
            <LabelContainer>
                {props.Label}
            </LabelContainer>
            <StyledP>
                {props.userData}
            </StyledP>
        </Fragment>
    )
}

export default UserInfo