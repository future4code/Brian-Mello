import React from 'react';
import './BodyImageContainer.css'

function BodyImageContainer (props) {
    return (
        <div className= "BodyImageContainer">
            {props.children}
        </div>
    )
}

export default BodyImageContainer;