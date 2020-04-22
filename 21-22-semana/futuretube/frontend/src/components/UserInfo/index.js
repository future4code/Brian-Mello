import React, { Fragment } from 'react';
import { LabelContainer, StyledP, StyledInput } from './styled';

export function UserInfo (props){
    return(
        <Fragment>
            <LabelContainer>
                {props.Label}
            </LabelContainer>
            {props.userData && <StyledP>
                {props.userData}
            </StyledP>}
            {props.value && <StyledInput type="password" defaultValue={props.value}/>}
        </Fragment>
    )
}

export default UserInfo