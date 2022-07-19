import React, { useState, useEffect } from "react";
import { MainContainer, DropDown, DropDownButton, DropDownMenu, LottoLogo, Footer, DivNumbers, DivId } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/constants"

function MegaSenaPage() {

  const [lotto, setLotto] = useState([])

  useEffect(() => {
    getLotto()
  }, [])

  const getLotto = () => {
    const url = `${BASE_URL}2359`
    axios
      .get(url)
      .then((response) => {
        setLotto(response.data)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  return (
    <MainContainer>

      <LottoLogo>

      </LottoLogo>



      <DropDown>
        <DropDownButton ><option>Mega Sena</option></DropDownButton>
        <DropDownMenu>
          <a href="/dia+de+sorte">Dia de Sorte</a>
          <a href="/loto+facil">Loto Fácil</a>
          <a href="/loto+mania">Loto Mania</a>
          <a href="/quina">Quina</a>
          <a href="/time+mania">Time Mania</a>
        </DropDownMenu>
      </DropDown>

      {lotto.numeros}
      <DivNumbers>
        {lotto.numeros[0]}
        {lotto.numeros[1]}
        {lotto.numeros[2]}
        {lotto.numeros[3]}
        {lotto.numeros[4]}
        {lotto.numeros[5]}
      </DivNumbers>

      <DivId>
        concurso
        <br></br>
        {lotto.id} -  {lotto.data} // Consertar exibição da data
      </DivId>


      <Footer>
        <br></br>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
      </Footer>





    </MainContainer>
  );
}

export default MegaSenaPage
