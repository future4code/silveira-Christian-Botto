import React, { useState, useEffect } from "react";
import { MainContainer, DropDown, DropDownButton, DropDownMenu, LottoLogo, Footer, DivNumbers, DivId } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/constants"
import NumberCards from "../../components/NumberCards";

function MegaSenaPage() {

  const [lotto, setLotto] = useState([])

  useEffect(() => {
    getLotto()    
    // lotto.data && dateLotto()
    lotto.data && console.log(lotto.data)
  }, [])

  // useEffect(() => {
  //   lotto.data  && dateLotto()
  //   lotto.data && console.log(lotto.data)
  // }, [])

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


  const numbersMap = lotto.numeros && lotto.numeros.map((number) => {
    return (
      <NumberCards
        key={number}
        no={number}
      />
    )
  })

   const dateLotto = (lotto) => {
    const dateFinal = ""
    const dateDay = lotto.data.slice(8, 2)
    const dateMonth = lotto.data.slice(5, 2)
    const dateYear = lotto.data.slice(0, 4)
    dateFinal = dateFinal.push("dateDay").push("/").push("dateMonth").push("/").push("dateYear")
    return (
      dateFinal
    )
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

      <DivNumbers>
        {numbersMap}
      </DivNumbers>


      <DivId>
        Concurso
        <br></br>
        {lotto.id} 
      </DivId>


      <Footer>
        <br></br>
        Este sorteio é meramente ilustrativo e não possui nenhu ma ligação com a CAIXA.
      </Footer>





    </MainContainer>
  );
}

export default MegaSenaPage
