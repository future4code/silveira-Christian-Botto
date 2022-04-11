
import React from 'react'
import axios from 'axios';


export class Page1 extends React.Component {
  state = {
    name: "",
    email: ""
  }

  onChangeInputPessoas = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  adicionaPessoas = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    // const headers = {
    //   Authorization: "christian-cardeal-silveira"
    // }
    axios.post(url, body, {
      headers: {
        Authorization: "christian-cardeal-silveira"
      }
    })
      .then((res) => {
        alert("Cadastraco com sucesso!")
        this.setState({name:"",email:""})
      })
      .catch((err) => {
        alert("Erro no cadastro :(")
      })
  };


  render() {
    return (
      < div >
        <h3>Cadastro</h3>
        <input
          value={this.state.name}
          onChange={this.onChangeInputPessoas}
          placeholder={"Nome"}
        />
        <input
          type="email"
          value={this.state.email}
          onChange={this.onChangeInputEmail}
          placeholder={"Email"}
        />
        <button onClick={this.adicionaPessoas}>Criar Usuário</button>
      </div >
    )
  }
}

export default Page1;



