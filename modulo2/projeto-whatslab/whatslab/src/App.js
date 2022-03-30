import React from "react";
import Exemplo8 from "./components/chat";
import styled from 'styled-components';
import './App.css';

// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `

const MainContainer = styled.div `
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercicioSelecionado: "8"
    };
  }

  render() {
    let exercicio = <Exemplo8 />;

    // const options = ["8"];
    return (
        <div className="App">
          {exercicio}
       </div>
    );
  }
}

export default App;
