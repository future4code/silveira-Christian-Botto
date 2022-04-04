import './App.css';
import styled from 'styled-components'
import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


const Centering = styled.div`	
	text-align: center;
`

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Page1 />;
      case 2: 
        return <Page2 />;
        case 3: 
        return <Page3 />;
        case 4: 
        return <Page4 />;
    }
  }


  irParaProximaEtapa = () => {
    this.setState ({etapa:this.state.etapa + 1})    
  }


  render() {
    return (
          <div>
            <Centering>
            {this.renderizaEtapa()}
            {this.state.etapa ===4  ? (null) : <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button> }
            </Centering>
          </div>
        );
  }
}

export default App;
