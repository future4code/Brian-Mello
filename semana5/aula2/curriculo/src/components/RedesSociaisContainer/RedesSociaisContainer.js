import React from 'react'
import './RedesSociaisContainer.css'

function RedesSociaisContainer (props) {
    return (
        <div className = "RedesSociaisContainer">
            { props.children}
        </div>
    )
}

export default RedesSociaisContainer;