import React from 'react'
import './SobreMimContainer.css'

function SobreMimContainer(props) {
    return (
        <div className = "SobreMimContainer">
            { props.children }
        </div>
    )
}

export default SobreMimContainer;