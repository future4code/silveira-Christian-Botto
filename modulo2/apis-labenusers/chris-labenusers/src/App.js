import './App.css';
import React from 'react';
import styled from 'styled-components';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import axios from 'axios';


const MainContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
`
class App extends React.Component {

  // STATES START
  state = {
    // Array inicializado da mesma forma que no Exemplo 5
    pessoas: [
      {
        name: "Teste Pessoa 1",
        email: "teste@pessoa.com"
      }
    ],
    valorInputPessoas: "",
    valorInputEmail: "",
    pagina: 1
  };
  // STATES END

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
    }
  }

  trocarPagina = (event) => {
    if (this.state.pagina === 1) {
      this.setState({pagina:2})
    } else if (this.state.pagina === 2) {
      this.setState({pagina:1})
    }
  }


  adicionaPessoas = () => {
    const novaPessoas = {
      nome: this.state.valorInputPessoas,
      email: this.state.valorInputEmail
    };

    const novoPessoas = [...this.state.pessoas, novaPessoas];
    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoas = (event) => {
    this.setState({ valorInputPessoas: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };




  render() {    
    return (
      <div>
        <button onClick={this.trocarPagina}>Trocar de Tela</button>
        {/* <MainContainer>
        {this.renderizaPagina()}
        </MainContainer> */}
        
        <MainContainer>
        <Page1
            valorInputPessoas={this.state.valorInputPessoas}
            valorInputEmail={this.state.valorInputEmail}
            onChangeInputEmail={this.onChangeInputEmail}
            onChangeInputPessoas={this.onChangeInputPessoas}
            adicionaPessoas={this.adicionaPessoas}
          />
          <Page2
            pessoas={this.state.pessoas}
            valorInputFiltro={this.state.valorInputFiltro}
            onChangeInputFiltro={this.onChangeInputFiltro}
          />
        </MainContainer>

      </div>
    );
  }
}

export default App;
