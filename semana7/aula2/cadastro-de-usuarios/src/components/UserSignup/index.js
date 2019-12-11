import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

class UserSingup extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            name: "",
            email: "",
        }
    }

    onNewUserNameChange = e => {
        this.setState({ name: e.target.value });
    };

    onNewUserMailChange = e => {
        this.setState({ email: e.target.value });
    };

    createUserForList = async () => {
        const userToBeCreated = {
            name: this.state.name,
            email: this.state.email
        };

        const headerConfig = {
            headers: {
                "api-token": "Brian"
            }
        };

        await axios.post(
            `${baseUrl}/users/createUser`,
            userToBeCreated,
            headerConfig
        );
        this.setState({ name: "", email: ""});
    };

    render () {
        return(
            <FormularioContainer>
                <h1>Cadastro de usuários</h1>
                <p>Nome</p>
                <Input 
                    type = "text" 
                    onChange = {this.onNewUserNameChange}
                    value = {this.state.name}
                    placeholder = "Digite seu Nome"
                />
                <p>Email</p>
                <Input 
                    type = "text" 
                    onChange = {this.onNewUserMailChange}
                    value = {this.state.email}
                    placeholder = "Digite seu Email" 
                />
                <ButtonCadastrar 
                    onClick={this.createUserForList}
                    >
                    Cadastrar
                </ButtonCadastrar>
          </FormularioContainer>
        );
    }
}

export default UserSingup;