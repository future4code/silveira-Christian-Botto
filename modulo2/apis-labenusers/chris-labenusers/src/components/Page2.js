
import React from 'react'


export class Page2 extends React.Component {
  render() {
  return (
      < div >
      {this.props.pessoas.name}
      <br/>
      Procurar usuário
      <br/>
    <input
      type="string"
      value={this.props.valorInputFiltro}
      onChange={this.props.onChangeInputFiltro}
      placeholder={"Nome exato para busca"}
    />
    <button onClick={this.props.onChangeInputFiltro}>Salvar Edição</button>
      </div >
  )}
}

export default Page2;



        