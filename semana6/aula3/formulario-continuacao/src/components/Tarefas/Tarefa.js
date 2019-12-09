import React from 'react';
import styled from "styled-components"

// Estilização
const TarefaContainer = styled.div `
    border: 0px;
    max-width: 300px;
    background-color: gray;
    color: white;
    display: flex;

`

// Código

function Tarefa(props) {
    return (
        <TarefaContainer>
            <nav>{props.tarefa}</nav>
            <button>Excluir</button>
        </TarefaContainer>
    )
}

export default Tarefa