import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post: [ 
      { nomeUsuario: 'paulinha', 
      fotoUsuario: 'https://picsum.photos/50/40', 
      fotoPost: 'https://picsum.photos/200/110' },

      { nomeUsuario: 'alice', 
      fotoUsuario: 'https://picsum.photos/50/50', 
      fotoPost: 'https://picsum.photos/200/120' },

      { nomeUsuario: 'marcos', 
      fotoUsuario: 'https://picsum.photos/50/30', 
      fotoPost: 'https://picsum.photos/200/150' }
    ],

    valorPost: {
      nomeUsuario: '',
      fotoUsuario: 'https://picsum.photos/200/223',
      fotoPost: 'https://picsum.photos/200/222'
    }
  }

  adicionaPost = () => {
    const novoPost = this.state.valorPost;

    const addPost = [novoPost, ...this.state.post];

    this.setState({ post: addPost });

    // let randpost = num.toString(Math.floor((Math.random() * 300) + 50));
    // let randUsuario = num.toString(Math.floor((Math.random() * 300) + 50));
    let randpost = '100'

    this.setState({ valorPost: {
      nomeUsuario: '',

      fotoUsuario: '',

      fotoPost: `'https://picsum.photos/200/${randpost}'`
    }});
  };  

  onChangeInputNome = (event) => {this.setState({valorPost: {nomeUsuario: event.target.value}});}
  onChangeInputFoto = (event) => {this.setState({valorPost: {fotoUsuario: event.target.value}});}
  onChangeInputPost = (event) => {this.setState({valorPost: {fotoPost: event.target.value}});}


  render() {
    const listComponentPost = this.state.post.map((obj) => {
      return (
        <Post nomeUsuario={obj.nomeUsuario}
              fotoUsuario={obj.fotoUsuario} 
              fotoPost={obj.fotoPost} 
        />
      )
    });

    return (
      <MainContainer>

        <input
            value={this.state.valorPost.nomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

        <button onClick={this.adicionaPost}>Adicionar</button>

        <div>{listComponentPost}</div>

      </MainContainer>
    );
  }
}

export default App;