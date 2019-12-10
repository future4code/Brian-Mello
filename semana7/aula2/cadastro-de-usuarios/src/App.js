import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'

const FormularioContainer = styled.div `
  width: 350px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  background-color: white;
`
const PaginaCadastroContainer = styled.div `
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`

const PaginaCadastroHeader = styled.div `
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Input = styled.input `
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid black;
`

const ButtonIrParaLista = styled.button`
    width: 80%;
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

const ListaDeUsuarioContainer = styled.div `
  width: 400px;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ButtonVoltar = styled.button`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    outline: 0;
    margin-left: 20px;
    :hover{
      background-color: grey;
      cursor: pointer;
    }
`

const ButtonCadastrar = styled.button`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    outline: 0;
    :hover{
      background-color: grey;
      cursor: pointer;
    }
`

const Titulo = styled.h1 `
  font-size: 40px;
  color: white;
`


// Código

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const token = "Brian";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tela: "Cadastro",
      allUsersList: [],
      userName: "",
      userMail: ""
    };
  }

  getAllUsers = () => {
    const url = `${baseUrl}/users/getAllUsers`;

    const request = axios.get(url, {
      headers: {
        api_token: token
      }
    });

    request.then(response => {
      const allUsersList = response.data.result.list;
      this.setState({ allUsersList: allUsersList });
    });
  };

  getAllUsersFromList = userListId => {
    const url = `${baseUrl}/users/getUser/${userListId}`;

    const request = axios.get(url, {
      headers: {
        api_token: token
      }
    });

    request.then(response => {
      console.log(response.data.result.musics);
    });
  };

  
  onClickButtonLista = () => {
    this.setState({ tela: "Lista"})
  }

  onClickButtonCadastro = () => {
    this.setState({ tela: "Cadastro"})
  }

  onNewUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  onNewUserMailChange = event => {
    this.setState({ userMail: event.target.value });
  };

  render () {
    let tela;
      if (this.state.tela === "Cadastro") {
        tela = (
          
          // Cadastro

          <FormularioContainer>
            <h1>Cadastro de usuários</h1>
            <p>Nome</p>
            <Input 
              type = "text" 
              onChange = {this.onNewUserNameChange}
              value = {this.state.userName}
              placeholder = "Digite seu Nome"
            />
            <p>Email</p>
            <Input 
              type = "text" 
              onChange = {this.onNewUserMailChange}
              value = {this.state.userMail}
              placeholder = "Digite seu Email" 
            />
            <ButtonCadastrar>Cadastrar</ButtonCadastrar>
            <ButtonIrParaLista onClick={this.onClickButtonLista}>Lista</ButtonIrParaLista>
          </FormularioContainer>


        )
      } else if (this.state.tela === "Lista") {
        tela = (

          // Lista

          <PaginaCadastroContainer>
            <PaginaCadastroHeader>
              <ButtonVoltar onClick={this.onClickButtonCadastro}>Voltar</ButtonVoltar>
            </PaginaCadastroHeader>
            <Titulo>Lista de Usuários</Titulo>
            <ListaDeUsuarioContainer>
              <ul>
                <li>
                  {/* {userListId.name}
                  {userListId.email} */}
                </li>
              </ul>
            </ListaDeUsuarioContainer>
          </PaginaCadastroContainer>
        )
      }
    return (
      <div className="App">
        {tela}
      </div>
    );
  }
}

export default App;
