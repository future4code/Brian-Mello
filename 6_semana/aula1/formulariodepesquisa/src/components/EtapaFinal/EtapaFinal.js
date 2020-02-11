import React from 'react'
import styled from 'styled-components'

const EtapaFinalContainer = styled.div `
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

const Titulo = styled.h1 `
    margin-bottom: 20px;
    width: 700px;
`


function EtapaFinal () {
    return (
        <EtapaFinalContainer>
            <Titulo>Obrigado Por Concluir o Formulário</Titulo>
            <p>Entraremos em contato assim que terminarmos de analisar o formulário</p>
        </EtapaFinalContainer> 
    )
}



export default EtapaFinal;