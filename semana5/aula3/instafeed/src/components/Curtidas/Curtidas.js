import React from 'react';
import './Curtidas.css'

class Curtidas extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            curtida: false,
            textoDoBotao: "mostrar" 
        };
    }

    aoCurtir = () => {
        if(this.state.curtida) {
            this.setState({
                curtida: false,
                textoDoBotao: "mostrar"
            })
        } else {
            this.setState ({
                curtida: true,
                textoDoBotao: "Esconder"
            })
        }
    }

    curtido = () => {
        if(this.state.curtida){
            return(<h1>Sou uma h1</h1>)
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.aoCurtir}> {this.state.textoDoBotao} </button>
                { 
                    this.curtido()
                }
            </div>
        );
    }
}

export default Curtidas;