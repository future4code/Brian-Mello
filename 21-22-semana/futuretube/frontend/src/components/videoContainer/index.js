import React from 'react';
import { StyledContainer, StyledImg, VideoFooterContainer, StyledTitle, StyledP, DeleteContainer, TrashIcon } from './styled';

function VideoContainer (props) {
    return (
        <StyledContainer>
            <StyledImg onClick={props.onClick} alt="not avaible" src={props.img}/>
            <VideoFooterContainer>
                <StyledTitle>{props.videoTitle}</StyledTitle>
                <StyledP>{props.username}</StyledP>
            </VideoFooterContainer>
            <DeleteContainer>
                <TrashIcon onClick={props.onDelete}/>
            </DeleteContainer>
        </StyledContainer>
    )
}

export default VideoContainer;