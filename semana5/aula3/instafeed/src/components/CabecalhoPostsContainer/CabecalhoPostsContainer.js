import React from 'react';
import './CabecalhoPostsContainer.css'

function CabecalhoPostsContainer (props) {
    return (
        <div className= "CabecalhoPostsContainer">
            {props.children}
        </div>
    )
}

export default CabecalhoPostsContainer;