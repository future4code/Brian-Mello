import React from 'react';

import SobreMim from './components/SobreMim/SobreMim';

import SobreMimContainer from './components/SobreMimContainer/SobreMimContainer';

import InfoEndereco from './components/InfoEndereco/InforEndereco';

import ExperienciasProfissionaisContainer from './components/ExperienciasProfissionaisContainer/ExperienciasProfissionaisContainer';

import RedesSociais from './components/RedesSociais/RedesSociais';

import RedesSociais2 from './components/RedesSociais/RedesSocias2';

import RedesSociaisContainer from './components/RedesSociaisContainer/RedesSociaisContainer';

import './App.css';


function App() {
  return (
    <div className="App">
      <div id= "Main-Container">
      <h1>Dados Pessoais</h1>
        <SobreMimContainer>
          <SobreMim imagem = {require('./imagens/DadosPrincipais/BrianImage.jpg')} texto = "Brian Mello" descricao = "Meu nome é Brian de Paula Mello, tenho 22 anos, curso Engenharia de software na UniCesumar e faço um curso profissionalizante Web Full-Stack na Future4."/>
          <InfoEndereco imagem = {require('./imagens/DadosPrincipais/eb74253fa1f773875385027d12960673---cone-de-casa-preta-simples-by-vexels.png')} texto = "Endereço: Comendador Siqueira 763"/>
          <InfoEndereco imagem = {require('./imagens/DadosPrincipais/gmail_icon_1.png')} texto = "Email: brianmmello@gmail.com"/>
        </SobreMimContainer>
        <RedesSociais2 imagem = {require('./imagens/RedesSociais/60920.png')}
           texto = "Ver Mais"/>

        <hr className = "linhaDivisoria"></hr>

        <h1>Experiências Profissionais</h1>

        <ExperienciasProfissionaisContainer>
          <SobreMim imagem = {require('./imagens/Empregos/Princesa-Supermercados.png')} texto = "Princesa Supermercados" descricao = "Trabalhei como Jovem aprendiz fazendo serviços como cadastrar clientes, contar dinheiro, etc"/>
          <SobreMim texto = "Mudanças Ricardo" descricao = "Trabalhei com mudanças de casas, fretes,etc "/>
        </ExperienciasProfissionaisContainer>

        <hr className = "linhaDivisoria"></hr>

        <h1>Redes Sociais</h1>

        <RedesSociaisContainer>
          <RedesSociais imagem = {require('./imagens/RedesSociais/5847f98fcef1014c0b5e48c0.png')} 
            texto = "Brian-Mello"/>
          <RedesSociais imagem = {require('./imagens/RedesSociais/49656.png')}
            texto = "Brian de Paula Mello"/>
          <RedesSociais imagem = {require('./imagens/RedesSociais/facebook-icon-download-vector-26.jpg')}
           texto = "Brian Mello"/>
          <RedesSociais imagem = {require('./imagens/RedesSociais/instagram-logo.png')}
           texto = "Brian_Mello_"/>
        </RedesSociaisContainer>
      </div>
    </div>
  );
}

export default App;
