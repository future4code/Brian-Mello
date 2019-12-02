import React from 'react'
import './Formulario.css'

class Formulario extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputNomeUsuario: "",
            inputFotoPerfilUsuario: "",
            inputFotoDoPost: "",
        };
    }


    nomeUsuario = e => {
        this.setState({
          inputNomeUsuario: e.target.value
        });
    };
    
      fotoPerfil = e => {
        this.setState({
          inputFotoPerfilUsuario: e.target.value
        });
    };
    
      fotoPost = e => {
        this.setState({
          inputFotoDoPost: e.target.value
        });
    };

    render() {
        return (
          <div>
            <p>Nome</p>
            <input value={this.state.inputNomeUsuario} onChange={this.nomeUsuario} />
            <p>Foto do Perfil</p>
            <input value={this.state.inputFotoPerfilUsuario} onChange={this.fotoPerfil} />
            <p>Foto do Post</p>
            <input value={this.state.inputFotoDoPost} onChange={this.fotoPost} />
          </div>
        );
    }
}



export default Formulario;