import React from 'react'
import './RedesSociais.css'

function Img (props) {
    return (<img alt = "imagem" className="tamanhoImagem" src={props.imagem} />)
}

function RedesSociais(props) {
    return (
        <div className="RedesSociais">
                <Img imagem={props.imagem}/>
            <nav id = "linksRedeSocial"> { props.texto }</nav>
        </div>
    )
}

export default RedesSociais;