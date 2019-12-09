import React from 'react';
import styled from 'styled-components';
import ToDoContainer from '../FormTodoList/FormTodoList';
import Formulario from '../FormTodoList/FormTodoList';

// Estilização

const MainContainer = styled.div `
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`


// Código

const listaDeTarefas = []

class ToDoContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            listaDeTarefas: listaDeTarefas
        };
    }

    adicionarTarefa = (tarefa) => {
        const novaTarefa = {
            id: Date.now(),
            tarefa: tarefa
        };

        const listaDeTarefasCopy = [...this.state.listaDeTarefas]

        listaDeTarefasCopy.push(novaTarefa);

        this.setState({ listaDeTarefas: listaDeTarefasCopy})
    };

    render () {
        return (
            <div>
                <MainContainer>
                    <Formulario/>
                </MainContainer>
            </div>
        )
    }
}


export default ToDoContainer;