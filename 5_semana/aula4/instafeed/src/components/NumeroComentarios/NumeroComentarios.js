import React from "react";
import "./NumeroComentarios.css"

class NumeroComentarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidadeDeComentarios: 0,
            textoBot: "clica em mim"
        };
    }

    aoCurtirBotao = () => {
        const novaQuantidadeComments = this.state.quantidadeDeComentarios + 1;
        this.setState({
            quantidadeDeComentarios: novaQuantidadeComments
        });
    };

    render (){
        return (
            <div>
                <button onClick={this.aoCurtirBotao}>
                    {this.state.textoBot}
                </button>
                <p>O botão foi clicado {this.state.quantidadeDeComentarios} vezes</p>   
            </div>
        )
    }
}

export default NumeroComentarios;