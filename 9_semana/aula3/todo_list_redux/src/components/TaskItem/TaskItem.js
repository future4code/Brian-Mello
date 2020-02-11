import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

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
  :hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
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

class taskItem extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        };
    }

    render () {
        return (
            <Tasks>
                <CheckboxContainer>
                <CheckboxButton
                    type = "checkbox"
                />
                </CheckboxContainer>
                <Task>blablabla</Task>
                <Delete>X</Delete>
            </Tasks>
        );
    }
}

export default taskItem;