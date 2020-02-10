import React from 'react'
import './ImagemPost.css'

function Img (props) {
    return (<img alt = "imagem" className="tamanhoImagemPost" src={props.imagem} />)
}

function ImagemPost(props) {
    return (
        <div className="ImagemPost">
            <nav>
                <Img imagem={props.imagem}/>
            </nav>
        </div>
    )
}

export default ImagemPost;