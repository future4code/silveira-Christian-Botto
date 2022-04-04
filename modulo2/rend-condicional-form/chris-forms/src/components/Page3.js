import styled from 'styled-components'
import { useState } from "react";


const Centering = styled.div`	
	text-align: center;
`

function Page3() {

  const MyForm = () => {
    const [myCar, setMyCar] = useState("nenhum");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="nenhum">Nenhum</option>
          <option value="tec">Técnico</option>
          <option value="ing">Curso de Inglês</option>
        </select>
      </form>
    )
  }

  return (
    <div>
      <Centering>
      <h1>Etapa 3 - Informações gerais do ensino</h1>
      <form>
        <label>
        5. Por que você não terminou um curso de graduação?
        <br/>
    <input type="text" name="curso" />
    <br/>
        <br/>
        </label>
        <label>
        4. Você fez algum curso complementar??
        <br/>
        <MyForm />
        </label> 
</form>  
</Centering>    
    </div>
  );
}

export default Page3;
