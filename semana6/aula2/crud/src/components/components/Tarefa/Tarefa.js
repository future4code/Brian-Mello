import React from 'react';
import styled from 'styled-components'

const Mensagem = styled.div `
  margin-left: 10px;
  border-bottom: 1px solid black;
  cursor: pointer;
  :active {
    color: red;
  }
`

function Tarefa(props) {
    return (
      <div className="Tarefa">
            <Mensagem>
                <ul><li>{props.tarefa}</li></ul>
            </Mensagem>
      </div>
    );
  }
  
  export default Tarefa;