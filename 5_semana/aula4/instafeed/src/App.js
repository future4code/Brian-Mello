import React from 'react';
import styled from 'styled-components';
import Formulario from './components/Formulario/Formulario'
import NumeroComentarios from './components/NumeroComentarios/NumeroComentarios';
import Curtidas from './components/Curtidas/Curtidas'
import CabecalhoPostsContainer from './components/CabecalhoPostsContainer/CabecalhoPostsContainer'
import BodyImageContainer from './components/BodyImageContainer/BodyImageContainer'
import ImagemPost from './components/ImagemPost/ImagemPost'
import PostagensContainer from './components/PostagensContainer/PostagensContainer';
import './App.css';

// Header
const Header = styled.div `
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a8c5ff;
  color: white;
  font-size: 40px
`

// Main
const Main = styled.div `
  width: 100%;
  height: 100%;
  background-color: #c4ddff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 40px;
  color:white;
`
const FormularioContainer = styled.div `
  width: 100%;
  height: 400px;
  background-color: #bfd6ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: 40px
  padding-top: 30px;
  margin-bottom: 40px
`
const Form = styled.div `
  width: 300px;
  height 300px;
  margin-top: 20px;
  background-color: #8da5d6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
`

// Postagens
const PostContainer = styled.div `
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center
  border: 1px solid black;
  margin-top: 40px;
  background-color: white;
`
const CabecalhoPost = styled.div `
  width: 100%;
  height: 15%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CorpoPost = styled.div `
  width: 100%;
  height: 60%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterPost = styled.div `
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
// footer
const Fotter = styled.div `
  width: 100%;
  height: 200px;
  background-color: #7795cc;
  position: relative;
  bottom: 0px;
`




class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listaDePost: [{title: "blablabla", imagem: "https://cdn.pixabay.com/photo/2017/10/27/15/52/jaguar-2894706__340.jpg"},
      {title: "ble", imagem: "https://cdn.pixabay.com/photo/2017/10/27/15/52/jaguar-2894706__340.jpg"}],
      inputNomeUsuario: "",
      inputFotoPerfilUsuario: "",
      inputFotoDoPost: "",
    }



  }

  nomeUsuario = e => {
    this.setState({
      inputNomeUsuario: e.target.value
    });
  };

  fotoPerfil = e => {
    this.setState({
      inputFotoPerfilUsuario: e.target.value
    });
  };

  fotoPost = e => {
    this.setState({
      inputFotoDoPost: e.target.value
    });
  };

  // enviarPost = e => {
  //     const listaDePostCopy = [...this.state.listaDePost];
  //     this.setState({

  //       listaDePost: listaDePostCopy
  //     })
  //   );
  // }


  render (){
    return (
      <div className="App">
        <Header>
          InstaFeed
        </Header>
        <Main>
          <FormularioContainer>
            Formulário de Posts
            <Form>
              <div>
                <p>Nome</p>
                <input value={this.state.inputNomeUsuario} onChange={this.nomeUsuario} />
                <p>Foto do Perfil</p>
                <input value={this.state.inputFotoPerfilUsuario} onChange={this.fotoPerfil} />
                <p>Foto do Post</p>
                <input value={this.state.inputFotoDoPost} onChange={this.fotoPost} />
                <button onClick={this.state.enviarPost}>Postar</button>
              </div>
            </Form>
          </FormularioContainer>
          Feed de Posts
          { this.state.listaDePost.map( post => {
              return (
                <Post title= {post.title} imagem = {post.imagem}/>
              )
          })}
        </Main>
        <Fotter>

        </Fotter> 
      </div>
    );
  }

}

function Post (props) {
  return (
      <PostagensContainer>
        <CabecalhoPostsContainer>
          <h4>{props.title}</h4>
        </CabecalhoPostsContainer>
        <BodyImageContainer>
          <ImagemPost imagem = {props.imagem}/>
        </BodyImageContainer>
        <NumeroComentarios/>
        <Curtidas/>
      </PostagensContainer>
  );
}

export default App;
