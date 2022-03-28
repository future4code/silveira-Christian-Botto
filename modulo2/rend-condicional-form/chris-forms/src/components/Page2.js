import styled from 'styled-components'


const Centering = styled.div`	
	text-align: center;
`

function Page2() {
  return (
    <div>
      <Centering>
      <h1>Etapa 2 - Informações do Ensino Superior</h1>
      <form>
        <label>
        5. Qual o curso?
        <br/>
    <input type="text" name="curso" />
    <br/>
        <br/>
        </label>
        <label>
        6. Qual a unidade de ensino?
        <br/>
        <input type="text" name="curso" />
        </label>
</form>  
</Centering>    
    </div>
  );
}

export default Page2;
