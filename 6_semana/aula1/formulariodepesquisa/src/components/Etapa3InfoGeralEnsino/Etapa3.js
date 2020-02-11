import React from 'react'
import styled from 'styled-components'

// Estilização

const ContainerEtapa3 = styled.div `
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

class Etapa3 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <ContainerEtapa3>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <p>Porque não Completou sua graduação?</p>
                <InputDados placeholder = "Digite o porquê..."/>
                <p>Você fez algum curso complementar?</p>
                <SelectOption>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Outros</option>
                </SelectOption>
                <ButtonProximaEtapa>Próxima Etapa</ButtonProximaEtapa>
            </ContainerEtapa3> 
        )
    }
}



export default Etapa3;