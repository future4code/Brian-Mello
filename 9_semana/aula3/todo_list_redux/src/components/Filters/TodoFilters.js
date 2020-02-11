import React from 'react'
import styled from 'styled-components'

// Estilização

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

class TodoFilters extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            checked: true
        };
    }

    render () {

        return (
            <Footer>
                <MarcarTodas>Marcar todas como completas</MarcarTodas>
                <Todas>Todas</Todas>
                <Pendentes>Pendentes</Pendentes>
                <Completas>Completas</Completas>
                <RemoverCompletas>Remover Completas</RemoverCompletas>
            </Footer>
        )
    }
}

export default TodoFilters;