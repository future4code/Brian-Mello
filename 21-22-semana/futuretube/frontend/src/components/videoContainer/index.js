import React from 'react';
import { StyledContainer, StyledImg, VideoFooterContainer, StyledTitle, StyledP, DeleteContainer, TrashIcon } from './styled';

function VideoContainer (props) {

    const isLogged = window.localStorage.getItem("accessToken")

    let deleteIcon 

    if(isLogged){
        deleteIcon = (
            <DeleteContainer>
                <TrashIcon onClick={props.onDelete}/>
            </DeleteContainer>
        )
    }
    return (
        <StyledContainer>
            <StyledImg defaultValue={props.defaultValue} onClick={props.onClick} alt="not avaible" src={props.img}/>
            <VideoFooterContainer>
                <StyledTitle>{props.videoTitle}</StyledTitle>
                <StyledP>{props.username}</StyledP>
            </VideoFooterContainer>
            {deleteIcon}
        </StyledContainer>
    )
}

export default VideoContainer;