import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1DadosGerais/Etapa1';
import Etapa2 from './components/Etapa2InfoEnsinoSuperior/Etapa2';
import Etapa3 from './components/Etapa3InfoGeralEnsino/Etapa3';
import EtapaFinal from './components/EtapaFinal/EtapaFinal';

// Estilização

const ContainerEtapa = styled.div `
    width: 50%;
    height: 550px;
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
    width: 500px;
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

const P = styled.p `
  margin-top: 10px;
`

// Código

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      etapa: "Etapa1",
    };
  }

  onClickEtapa2 = () => {
    this.setState({ etapa: "Etapa2"  });
  };

  onClickEtapa3 = () => {
    this.setState({ etapa: "Etapa3"  });
  };

  onClickEtapaFinal = () => {
    this.setState({ etapa: "EtapaFinal"  });
  };

  render () {
    let etapa;
      if (this.state.etapa === "Etapa1") {
        etapa = (

          /* Etapa1 */

          <ContainerEtapa>
            <h1>Etapa 1 - Dados Gerais</h1>
            <P>Nome</P>
            <InputDados placeholder = "Digite seu nome"/>
            <P>Idade</P>
            <InputDados placeholder = "Digite sua Idade"/>
            <P>Email</P>
            <InputDados placeholder = "Digite seu Email"/>
            <P>Escolha sua Escolaridade</P>
            <SelectOption>
                <option>Ensino Médio Completo</option>
                <option>Ensino Médio incompleto</option>
                <option>Ensino Superior completo</option>
                <option>Ensino Superior incompleto</option>
            </SelectOption>
            <ButtonProximaEtapa onClick={this.onClickEtapa2}>Próxima Etapa</ButtonProximaEtapa>
          </ContainerEtapa> 
        );
      } else if (this.state.etapa === "Etapa2") {
        etapa = (

          /* Etapa2 */

          <ContainerEtapa>
            <Titulo>Etapa 2 - Informações do Ensino Superior</Titulo>
            <P>Curso</P>
            <InputDados placeholder = "Digite seu Curso"/>
            <P>Instituição de Ensino</P>
            <InputDados placeholder = "Digite o nome da Instituição"/>
            <ButtonProximaEtapa onClick={this.onClickEtapa3}>Próxima Etapa</ButtonProximaEtapa>
          </ContainerEtapa> 
        );
      } else if (this.state.etapa === "Etapa3") {
        etapa = (

          /* Etapa3 */
          
          <ContainerEtapa>
            <Titulo>Etapa 3 - Informações Gerais de Ensino</Titulo>
            <P>Porque não Completou sua graduação?</P>
            <InputDados placeholder = "Digite o porquê..."/>
            <P>Você fez algum curso complementar?</P>
            <SelectOption>
                <option>Nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de Inglês</option>
                <option>Outros</option>
            </SelectOption>
            <ButtonProximaEtapa onClick = {this.onClickEtapaFinal}>Próxima Etapa</ButtonProximaEtapa>
          </ContainerEtapa> 
        );
      } else {
        etapa = (

          /* Etapa Final */

          <ContainerEtapa>
            <Titulo>Obrigado Por Concluir o Formulário!</Titulo>
            <P>Entraremos em contato assim que terminarmos de analisar o formulário.</P>
          </ContainerEtapa> 
        )
      }

    return (
      <div className="App">
        {etapa}
      </div>
    );
  }
}

export default App;
