import React from 'react';
import styled from 'styled-components';
import PokeChange from './components/PokeChange';
import PokeList from './components/PokeList';

// Estilização

const Button = styled.button`
    width: 10%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    outline: 0;
    margin-top: 10px;
    border: 0;
    :hover{
      color: black;
      background-color: white;
      cursor: pointer;
    }
`

const BackgroundStyle = styled.div `
  width: 100%;
  height: 741px;
  background-image: url('https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg');
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

// Código

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      window: "PokeChange"
    };
  }

  onClickSwitchWindow = () => {
    if (this.state.window === "PokeChange"){
      this.setState({window: "PokeList"})
    } else {
      this.setState({window: "PokeChange"})
    }
  };

  render () {
    const buttonText = this.state.window === "PokeChange" ? "Go for PokeList" : "Back for PokeChange"
    return (
      <BackgroundStyle>
        {this.state.window === "PokeChange" ? <PokeChange/> : <PokeList/>}
        <Button onClick = {this.onClickSwitchWindow}>{buttonText}</Button>
      </BackgroundStyle>    
    )
  };
}

export default App;
