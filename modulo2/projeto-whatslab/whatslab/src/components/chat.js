import React from "react";

// Esse é o último e mais completo exemplo. Ele reúne todos os conceitos
// vistos nos últimos exemplos. Por isso:
//
// É MUITO IMPORTANTE QUE VOCÊ ENTENDA TUDO O QUE ACONTECE NELE
// NÃO PROSSIGA SEM ENTENDER. PERGUNTE AOS COLEGAS OU AOS INSTRUTORES
// SE NÃO ENTENDER.
//
// Ele demonstra como adicionar um item em um array de objetos,
// a partir de mútliplos campos de input.

// Exercício: Como no Exemplo 5, adicione um campo de telefone.
// Agora, deve haver também um input de telefone e ele deve ser adicionado
// à lista junto com as outras informações.

class Exemplo8 extends React.Component {
  state = {
    // Array inicializado da mesma forma que no Exemplo 5
    pessoas: [
      {
        nome: "User",
        email: "Message"
      }
    ],
    // Agora precisamos de duas variáveis no estado, guardando
    // os valores dos dois inputs que temos na tela
    valorInputPessoa: "",
    valorInputEmail: ""
  };

  adicionaPessoa = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaPessoa = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nome: this.state.valorInputPessoa,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      email: this.state.valorInputEmail
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novoPessoas = [...this.state.pessoas, novaPessoa];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de email

    // Define o estado "valorInputEmail" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nome} - {pessoa.email}
        </p>
      );
    });

    return (
      <div>
        <div>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputPessoa}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputEmail}
            // E a função também é outra
            onChange={this.onChangeInputEmail}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo8;
