import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonDelete = styled.button`
    :hover{
        color: white;
        background-color: red;
        cursor: pointer;
    }
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
                props.OnClickDelete();

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <li>
            {props.user.name} <ButtonDelete onClick = {OnClickDelete}>X</ButtonDelete>
        </li>
    );
};

export default ListItem;