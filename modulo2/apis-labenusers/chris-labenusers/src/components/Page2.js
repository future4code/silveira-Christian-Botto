
import React from 'react'
import axios from 'axios';
import styled from "styled-components"

const CardUser = styled.div`
border: 1px solid blueviolet;
padding: 5px;
margin: auto;
width: 20vw;
display: flex;
justify-content: space-between;
`


export class Page2 extends React.Component {
  state = {
    usuarios: [],
    name2: ""
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, {
      headers: {
        Authorization: "christian-cardeal-silveira"
      }
    })
      .then((res) => {
        this.setState({usuarios: res.data})
      })
      .catch((err) => {
        alert("Lista não carregou")
      })
  };


  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
        headers: {
            Authorization: "christian-cardeal-silveira"
        }
    })
        .then((res) => {
            alert("Usuário(a) deletado")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Erro")
        })
}

onChangeInputFiltro = (event) => {
  this.setState({ name2: event.target.value });
};

editarUsuario = () => {
  
  // tinha que passar a ID do edit atual para o componente 3
}


usuariosfiltrados = () => {
  this.state.usuarios.filter(user => {
      return user.name.toLowerCase().includes(this.state.name2.toLowerCase())
    })
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((user) => {
      return (
          <CardUser key={user.id} >
              {user.name}
              <button onClick={() => this.editarUsuario(user.id)}>Editar</button>
              <button onClick={() => this.deletarUsuario(user.id)}>X</button>
          </CardUser>
      )
  })
  
    return (
      < div >
        <h3>Lista de Usuários</h3>
        <br/>
        {listaDeUsuarios}
      <br/>
      Procurar usuário
      <br/>
     <input
      type="string"
      value={this.name2}
      onChange={this.onChangeInputFiltro}
      placeholder={"Nome para busca"}
    />
    <button onClick={this.usuariosfiltrados}>Filtrar</button> 
      </div >
    )
  }
}

export default Page2;



