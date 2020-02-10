import React from 'react';
import styled from 'styled-components'
import './App.css';
import Tarefa from './components/components/Tarefa/Tarefa';

// Estilização

const FormularioDeTarefas = styled.div `
  width: 50%;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 200px;
  color: black;
  border-bottom: 1px solid black;
`

const Titulo = styled.h1 `
  margin-top: 20px;
  margin-bottom: 20px;
`

const InputDeTarefas = styled.input `
  border: none;
  outline: 0;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
`

const ButtonDeTarefas = styled.button `
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 150px;
  height: 30px;
  outline: 0;
  cursor: pointer;
`

const SelectFiltroDeTarefas = styled.select `
  margin-top: 10px;
  cursor: pointer;

`
const ContainerDeTarefasTitulo = styled.div `
  width: 50%;
  height: 100px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerDeTarefas = styled.div `
  width: 50%;
  height: 300px;
  background-color: white;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid black;
`
const ContainerDeTarefasConcluídas = styled.div `
  width: 50%;
  height: 300px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid black;
`
// Código

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      listaDeTarefas: [],
      inputDeTarefas: ""
    }
  }

  tarefaCriada = (e) => {
    this.setState ({
      inputDeTarefas: e.target.value
    })
  }

  atualizaListaDeTarefas = () => {
    const novaTarefa = {
      tarefa: this.state.inputDeTarefas
    }

    const listaDeTarefasCopy = [...this.state.listaDeTarefas, novaTarefa]
    this.setState({
      listaDeTarefas: listaDeTarefasCopy,
      inputDeTarefas: ""
    })
  }

  render () {
    return (
      <div className="App">
        <FormularioDeTarefas>
          <Titulo>To-Do List</Titulo>
          <InputDeTarefas 
            type= "text" 
            onChange={this.tarefaCriada} value = {this.state.inputDeTarefas}
            placeholder = "Digite a tarefa"
          />
          <ButtonDeTarefas onClick={this.atualizaListaDeTarefas}>
            Adicionar Tarefa
          </ButtonDeTarefas>
          <nav>Filtro</nav>
          <SelectFiltroDeTarefas>
            <option>Nenhum</option>
            <option>Completas</option>
            <option>Pendentes</option>
          </SelectFiltroDeTarefas>
          </FormularioDeTarefas>
          <ContainerDeTarefasTitulo>
            <Titulo>Lista de Tarefas</Titulo>
          </ContainerDeTarefasTitulo>
          <ContainerDeTarefas>
            
              {this.state.listaDeTarefas.map(e => {
                return(
                <ul><Tarefa tarefa={e.tarefa}/></ul>
                )
              })}
          </ContainerDeTarefas>
          <ContainerDeTarefasConcluídas>
              <Titulo>Tarefas Concluídas</Titulo>
          </ContainerDeTarefasConcluídas>

      </div>
    );
  }
}

export default App;
