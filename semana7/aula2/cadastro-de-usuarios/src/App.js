import React from 'react';
import './App.css';
import styled from 'styled-components'
import UserSingup from './components/UserSignup'
import UsersList from './components/UsersList';

const Button = styled.button`
    width: 10%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    outline: 0;
    margin-top: 10px;
    :hover{
      background-color: grey;
      cursor: pointer;
    }
`

// Código


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tela: "Cadastro",
    };
  }

  
  onClickHandleButton = () => {
    if (this.state.tela === "Cadastro"){
      this.setState({ tela: "Lista"})
    } else {
      this.setState({ tela: "Cadastro"})
    }   
  };

  render () {

    const buttonText =
    this.state.tela === "Cadastro"
      ? "Ir para Lista"
      : "Voltar para Cadastro";

    return (
      <div className="App">
        {this.state.tela === "Cadastro" ? <UserSingup/> : <UsersList/>}
        <Button onClick = {this.onClickHandleButton}>{buttonText}</Button>
      </div>
    );
  }
}

export default App;
