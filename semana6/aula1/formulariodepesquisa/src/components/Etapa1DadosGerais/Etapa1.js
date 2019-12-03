import React from 'react'
import styled from 'styled-components'

// Estilização

const ContainerEtapa1 = styled.div `
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
const SelectOption = styled.select `
    margin-top: 15px;
`

const ButtonProximaEtapa = styled.button `
    margin-top: 120px;
    border-radius: 8px;
    width: 100px;
    height: 30px;
    outline: 0;
`

// Código

class Etapa1 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <ContainerEtapa1>
                <h1>Etapa 1 - Dados Gerais</h1>
                <p>Nome</p>
                <InputDados placeholder = "Digite seu nome"/>
                <p>Idade</p>
                <InputDados placeholder = "Digite sua Idade"/>
                <p>Email</p>
                <InputDados placeholder = "Digite seu Email"/>
                <p>Escolha sua Escolaridade</p>
                <SelectOption>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Médio incompleto</option>
                    <option>Ensino Superior completo</option>
                    <option>Ensino Superior incompleto</option>
                </SelectOption>
                <ButtonProximaEtapa>Próxima Etapa</ButtonProximaEtapa>
            </ContainerEtapa1> 
        )
    }
}



export default Etapa1;