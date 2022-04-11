import React from 'react';
import styled from 'styled-components';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';


const MainContainer = styled.div`
    padding: 10px;
    text-align: center;
    margin: auto;
    border: 3px solid blueviolet;
    width: 70vh;
    height:80vh;
`
class App extends React.Component {

  // STATES START
  state = {
    pagina: 1
  };
  // STATES END

  // PAGES START
  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
        case 3:
        return <Page3 />;
        default:
          return  <div>Página não encontrada</div>
    }
  }

  trocarPagina = (event) => {
    if (this.state.pagina === 1) {
      this.setState({pagina:2})
    } else if (this.state.pagina === 2) {
      this.setState({pagina:1})
    } else if (this.state.pagina === 3) {
      this.setState({pagina:2})
    }
  }
    // PAGES END

  render() {    
    return (
      <div>        
        <MainContainer>
          <h1>Labenusers</h1>
        <button onClick={this.trocarPagina}>Trocar de Tela</button>
        {this.renderizaPagina()}
        </MainContainer>
      </div>
    );
  }
}

export default App;
