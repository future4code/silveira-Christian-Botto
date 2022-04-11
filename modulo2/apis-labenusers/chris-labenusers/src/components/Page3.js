
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

export class Page3 extends React.Component {

    state = {
        usuarios: [],
        name: "",
        email: ""
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
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert("Lista não carregou")
            })
    };

    onChangeInputPessoas = (event) => {
        this.setState({ name: event.target.value });
    };

    onChangeInputEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    editarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.edit(url, body, {
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


    render() {
        return (
            < div >
                <h3>Editar Usuário</h3>
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
                <button onClick={this.editarUsuario}>Editar Usuário</button>
            </div >
        )
    }
}

export default Page3;



