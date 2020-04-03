import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  min-width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-top: 20px;
`

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 20px;
  :hover{
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`

const StyledInput = styled.input`
  width: auto;
  height: auto;
`

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

function App() {
  return (
    <div>
      <form 
        action="http://localhost:3000/uploadFile" 
        method="POST" 
        enctype="multipart/form-data" 
      >
        <p>Link</p>
        <input name="data" type="file"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
