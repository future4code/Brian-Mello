import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListItem from '../UsersItems';

const PaginaCadastroContainer = styled.div `
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`

const Titulo = styled.h1 `
  font-size: 40px;
  color: white;
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

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class UsersList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            allUsers: [],
        };
    }

    componentDidMount() {
        this.getAllUsers();
      }
    
      getAllUsers = async () => {
        const headerConfig = {
          headers: {
            "api-token": "Brian"
          }
        };
    
        const response = await axios.get(
          `${baseUrl}/users/getAllUsers`,
          headerConfig
        );
    
        this.setState({ allUsers: response.data.result });
      };

    render () {
        return (
            <PaginaCadastroContainer>
                <Titulo>Lista de Usuários</Titulo>
                <ListaDeUsuarioContainer>

                  {this.state.allUsers.map(user => (
                    <ListItem user = {user} OnDeleteUser = {this.getAllUsers}/>
                  ))}

                </ListaDeUsuarioContainer>
          </PaginaCadastroContainer>
        )
    }
}

export default UsersList;