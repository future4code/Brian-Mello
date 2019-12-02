import React from 'react'
import styled from 'styled-components'

// Estilização

const ContainerEtapa2 = styled.div `
    width: 50%;
    height: 500px;
    min-width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    color: black;
    padding-top: px;
    border: 1px solid black;
`
const InputDados = styled.input `
    width: 20%;
    height: 20px;
    min-width: 200px;
    margin-bottom: 20px;
    margin-top: 10px;
`
const ButtonProximaEtapa = styled.button `
    margin-top: 120px;
    border-radius: 8px;
    width: 100px;
    height: 30px;
    outline: 0;
`
// Código

class Etapa2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <ContainerEtapa2>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <p>Curso</p>
                <InputDados placeholder = "Digite seu Curso"/>
                <p>Instituição de Ensino</p>
                <InputDados placeholder = "Digite o nome da Instituição"/>
                <ButtonProximaEtapa>Próxima Etapa</ButtonProximaEtapa>
            </ContainerEtapa2> 
        )
    }
}



export default Etapa2;