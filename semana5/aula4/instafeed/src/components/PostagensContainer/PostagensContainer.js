import React from 'react'
import './PostagensContainer.css'

function PostagensContainer (props) {
    return (
        <div className = "Postagens-Container">
            { props.children }
        </div>
    )
}

export default PostagensContainer;

