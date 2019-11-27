import React from 'react'
import './RedesSociais2.css'

function Img (props) {
    return (<img alt = "imagem" className="tamanhoImagem2" src={props.imagem} />)
}

function RedesSociais2(props) {
    return (
        <div className="RedesSociais2">
            <Img imagem={props.imagem}/>
            <nav id = "linksRedeSocial2"> { props.texto }</nav>
        </div>
    )
}

export default RedesSociais2;