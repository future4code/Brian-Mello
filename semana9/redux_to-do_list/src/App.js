import React from 'react';
import styled from 'styled-components'

// estilização

const MainContainer = styled.div`
  min-height: 694px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ghostwhite;
`

const TitleContainer = styled.div `
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h2 `
  font-size: 100px;
  margin: 0px;
  text-shadow: 4px 4px gray;
`
const TasksContainer = styled.div `
  min-height: 100px;
  width: 97%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 0;
`

const InputTask = styled.input `
  height: 40px;
  max-height: 40px;
  width: 100%;
  max-width: 90%;
  font-size: 2vw;
  text-size-adjust: adjust;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0px;
  padding-left: 10%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px black;
  margin-bottom: 3px;
`
const Tasks = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;

`

const CheckboxContainer = styled.div `
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckboxButton = styled.input`
  height: 60%;
  width: 40px;
  padding: 0;
  margin: 0;
  position: relative;
  left: 0;
  :hover {
    cursor: pointer;
  }
`

const Task = styled.div `
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Delete = styled.div `
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid gray;
  opacity: 50%;
  :hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`

const Footer = styled.footer `
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
`

const MarcarTodas = styled.div `
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Completas = styled.div `
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid orange;
    border-radius: 5px;
    cursor: pointer;
  }
`

const Pendentes = styled.div `
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid orange;
    border-radius: 5px;
    cursor: pointer;
  }
`

const Todas = styled.div `
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid orange;
    border-radius: 5px;
    cursor: pointer;
  }
`

const RemoverCompletas = styled.div `
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

// código

const initialState = {
  text: ""
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case "TASK_POST":
      // const newTaskPost
      // return newTaskPost

    case "DELETE_TASK":
      // const newDeleteTask
      // return newDeleteTask

    case "CHECK_TASK":
      // const newCheckTask
      // return newCheckTask

    case "CHECK_ALL_TASKS":
      // const newCheckAllTasks
      // return newCheckAllTasks

    case "FILTER_ALL_TASKS":
      // const newFilterAllTasks
      // return newFilterAllTasks

    case "FILTER_PENDENTS_TASKS":
      // const newFilterAllPendentsTasks
      // return newFilterAllPendentsTasks

    case "FILTER_COMPLETED_TASKS":
      // const newFilterAllCompletedTasks
      // return newFilterAllCompletedTasks

    case "REMOVE_COMPLETED_TASKS":
      // const newRemoveCompletedTasks
      // return newRemoveCompletedTasks

    default: 
    return state

  }
}

const postTask = () => {
  return {
    type: "TASK_POST",
    payload: {}
  }
}

const deleteTask = () => {
  return {
    type: "DELETE_TASK",
    payload: {}
  }
}

const checkTask = () => {
  return {
    type: "CHECK_TASK",
    payload: {}
  }
}

const checkAllTasks = () => {
  return {
    type: "CHECK_ALL_TASKS",
    payload: {}
  }
}

const filterTasks = () => {
  return {
    type: "FILTER_ALL_TASKS",
    payload: {}
  }
}

const filterPendetsTasks = () => {
  return {
    type: "FILTER_PENDENTS_TASKS",
    payload: {}
  }
}

const filterCompletedTasks = () => {
  return {
    type: "FILTER_COMPLETED_TASKS",
    payload: {}
  }
}

const removeCompletedTasks = () => {
  return {
    type: "REMOVE_COMPLETED_TASKS",
    payload: {}
  }
}



class App extends React.Component {
  constructor (props) {
    super(props) 
    
    this.state = {

    }
  }
  
  render () {
    return (
      <MainContainer>
        <TitleContainer>
          <Title>4 LIST</Title>
        </TitleContainer>
          <TasksContainer>
            <InputTask placeholder = "Digite o que você tem que fazer..."/>
            <Tasks>
              <CheckboxContainer>
                <CheckboxButton type = "checkbox"/>
              </CheckboxContainer>
              <Task>
                <span>blablabla</span>
              </Task>
              <Delete>
                X
              </Delete>
            </Tasks>
            <Tasks>
              <CheckboxContainer>
                <CheckboxButton type = "checkbox"/>
              </CheckboxContainer>
              <Task>
                <span>blablabla</span>
              </Task>
              <Delete>
                X
              </Delete>
            </Tasks>
            <Footer>
              <MarcarTodas>
                <span>Marcar todas como completas</span>
              </MarcarTodas>
              <Completas>
                <p>Todas</p>
              </Completas>
              <Pendentes>
                <p>Pendentes</p>
              </Pendentes>
              <Todas>
                <p>Completas</p>
              </Todas> 
              <RemoverCompletas>
                <span>Remover Completas</span>
              </RemoverCompletas>
            </Footer>
          </TasksContainer>
      </MainContainer>
    );
  }
}

export default App;
