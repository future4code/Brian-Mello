import React from 'react';
import styled from 'styled-components';
import TodoFilters from './Filters/TodoFilters';
import TaskItem from './TaskItem/TaskItem';

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

class TodoContainer extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            task: "",
        };
    }

    onChangeTask = e => {
        this.setState({ task: e.target.value })
    };

    render () {
        return (
            <MainContainer>
                <TitleContainer>
                    <Title>4 LIST</Title>
                </TitleContainer>
                <TasksContainer>
                    <InputTask 
                        type = "text"
                        placeholder = "Qual a tarefa de hoje?"
                        value = {this.state.task}
                        onChange = {this.onChangeTask}    
                    />
                    <TaskItem/>
                    <TodoFilters/>
                </TasksContainer>
            </MainContainer>
        )
    }
}

export default TodoContainer;