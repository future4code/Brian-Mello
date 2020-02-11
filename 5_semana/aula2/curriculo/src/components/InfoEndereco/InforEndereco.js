import React from 'react'
import './InfoEndereco.css'

function Img (props) {
    return (<img alt = "imagem" className="tamanhoImagemEnde" src={props.imagem} />)
}

function InfoEndereco(props) {
    return (
        <div className="InfoEndereco">
            <nav>
                <Img imagem={props.imagem}/>
            </nav>
            <p> { props.texto }</p>
        </div>
    )
}

export default InfoEndereco;