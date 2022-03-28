import styled from 'styled-components'
import { useState } from "react";


const Centering = styled.div`	
	text-align: center;
`

function Page1() {
  const MyForm = () => {
    const [myCar, setMyCar] = useState("medio-incomp");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="medio-incomp">Ensino médio incompleto</option>
          <option value="medio-comp">Ensino médio completo</option>
          <option value="sup-incomp">Ensino superior incompleto</option>
          <option value="´sup-comp">Ensino superior completo</option>
        </select>
      </form>
    )
  }

  return (
    <div>
      <Centering>
      <h1>Etapa 1 - Dados Gerais</h1>
      <form>
        <label>
        1. Qual o seu nome?
        <br/>
    <input type="text" name="name" />
    <br/>
        <br/>
        </label>
        <label>
        2. Qual sua idade?
        <br/>
    <input type="number" name="age" />
        </label>
        <br/>
        <br/>
        <label>
        3. Qual o seu email?
        <br/>
    <input type="email" name="email" />
        </label>     
        <br/>
        <br/> 
        <label>
        4. Qual sua escolaridade?
        <br/>
        <MyForm />
        </label>     
        <br/>
        <br/> 
</form>  
</Centering>    
    </div>
  );
}

export default Page1;
