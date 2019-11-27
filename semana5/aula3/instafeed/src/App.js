import React from 'react';
import NumeroComentarios from './components/NumeroComentarios/NumeroComentarios';
import Curtidas from './components/Curtidas/Curtidas'
import CabecalhoPostsContainer from './components/CabecalhoPostsContainer/CabecalhoPostsContainer'
import BodyImageContainer from './components/BodyImageContainer/BodyImageContainer'
import ImagemPost from './components/ImagemPost/ImagemPost'
import './App.css';
import PostagensContainer from './components/PostagensContainer/PostagensContainer';

function App() {
  return (
    <div className="App">
      <PostagensContainer>
        <CabecalhoPostsContainer>
          <h4>Imagem1</h4>
        </CabecalhoPostsContainer>
        <BodyImageContainer>
          {/* <ImagemPost imagem = {require ('./Imagens/imagem1.jpg')}/> */}
        </BodyImageContainer>
        <NumeroComentarios/>
        <Curtidas/>
      </PostagensContainer>

      <PostagensContainer>
        <CabecalhoPostsContainer>
          <h4>Imagem1</h4>
        </CabecalhoPostsContainer>
        <BodyImageContainer>
          
        </BodyImageContainer>
        <NumeroComentarios/>
        <Curtidas/>
      </PostagensContainer>

      <PostagensContainer>
        <CabecalhoPostsContainer>
          <h4>Imagem1</h4>
        </CabecalhoPostsContainer>
        <BodyImageContainer>
          
        </BodyImageContainer>
        <NumeroComentarios/>
        <Curtidas/>
      </PostagensContainer>
    </div>
  );
}

export default App;
