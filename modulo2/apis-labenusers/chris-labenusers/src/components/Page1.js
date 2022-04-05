
import React from 'react'


export class Page1 extends React.Component {
  render() {
  return (
      < div >
      <input
      value={this.props.valorInputPessoas}
      onChange={this.props.onChangeInputPessoas}
      placeholder={"Nome"}
    />
    <input
      type="email"
      value={this.props.valorInputEmail}
      onChange={this.props.onChangeInputEmail}
      placeholder={"Email"}
    />
    <button onClick={this.props.adicionaPessoas}>Criar Usuário</button>
      </div >
  )}
}

export default Page1;



        