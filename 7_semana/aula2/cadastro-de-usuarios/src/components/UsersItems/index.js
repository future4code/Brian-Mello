import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonDelete = styled.button`
    outline: 0;
    width: 40px;
    height: 100%;
    border: 0;
    :hover{
        color: white;
        background-color: red;
        cursor: pointer;
    }
`

const UsersContainer = styled.div `
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`
const P = styled.p `
    font-size: 20px;
    margin-right: 30px;
`

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

const ListItem = props => {
    const OnClickDelete = async () => {
        const url = `${baseUrl}/users/deleteUser?id=${props.user.id}`;

        const headerConfig = {
            headers: {
                "api-token": "Brian"
            }
        };

        try {
            await axios.delete (url, headerConfig);
                props.OnDeleteUser();
                alert(`Usuário ${props.user.name} deletado com sucesso`)

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <UsersContainer>
            <div></div>
                <P>{props.user.name}</P> <ButtonDelete onClick = {OnClickDelete}>X</ButtonDelete>
        </UsersContainer>
    );
};

export default ListItem;