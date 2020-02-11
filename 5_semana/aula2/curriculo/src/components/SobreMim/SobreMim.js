import React from 'react'
import './SobreMim.css'

function Img (props) {
    return (<img alt = "imagem" className="tamanhoImagemSobre" src={props.imagem} />)
}

function SobreMim(props) {
    return (
        <div className="SobreMim">
            <nav>
                <Img imagem={props.imagem}/>
            </nav>
            <h4>{ props.texto }</h4>
            <p>{ props.descricao }</p>
        </div>
    )
}

export default SobreMim;