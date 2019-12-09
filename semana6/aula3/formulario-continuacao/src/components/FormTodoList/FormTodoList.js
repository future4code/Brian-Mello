import React from 'react';
import styled from 'styled-components';
import { whileStatement } from '@babel/types';

// Estilização

const FomularioContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    width: 30%;
    min-width: 30%;
    max-width: 500px;
    height: 300px;
`

const PFormulario = styled.p `
    margin-top: 15px;
`

const InputFormulario = styled.input `
    margin-top: 5px;
`

const SelectFormulario = styled.select `
    margin-top: 5px;
`

const ButtonFormulario = styled.button `
    margin-top: 30px;
`

// Código



class Formulario extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            inputDeTarefas: ""
        };
    }

    onChangeInputDeTarefas = e => {
        this.setState({inputDeTarefas: e.target.value})
    }

    onClickAdicionarTarefa = () => {
        this.props.adicionarTarefa(
            this.state.inputDeTarefas
        );

        this.setState({
            inputDeTarefas: ""
        })
    }

    render () {
        return (
            <FomularioContainer>
                <h1>To-do List</h1>
                <PFormulario>Tarefa</PFormulario>
                <InputFormulario
                    value = {this.state.inputDeTarefas}
                    onChange = {this.onChangeInputDeTarefas}
                    placeholder = {"Digite a tarefa"}
                    type = "text"
                />
                <PFormulario>Filtro</PFormulario>
                <SelectFormulario>
                    <option>Nenhum</option>
                    <option>Pendente</option>
                    <option>Concluído</option>
                </SelectFormulario>
                <ButtonFormulario>Adicionar Tarefa</ButtonFormulario>
            </FomularioContainer>
        )
    }
}


export default Formulario;