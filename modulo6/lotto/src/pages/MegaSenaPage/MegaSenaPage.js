import React, { useState, useEffect } from "react";
import { MainContainer, DropDown, DropDownButton, DropDownMenu, LottoLogo, Footer, DivNumbers, DivId } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/constants"
import NumberCards from "../../components/NumberCards";
import MegaSena_Logo from "../../assets/MegaSena_Logo.png"
import MegaSena_Name from "../../assets/MegaSena_Name.png"

function MegaSenaPage() {

  const [lotto, setLotto] = useState([])

  useEffect(() => {
    getLotto()
    // lotto && console.log(lotto)
  }, [])
  // console.log(lotto) 

  const getLotto = () => {
    const url = `${BASE_URL}2359`
    axios
      .get(url)
      .then((response) => {
        setLotto(response.data)
        // console.log(lotto) 
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }


  const numbersMap = lotto && lotto.numeros && lotto.numeros.map((number) => {
    return (
      <NumberCards
        key={number}
        no={number}
      />
    )
  })



  const dateLotto = (lotto) => {
    const dateDay = lotto.data.slice(8, 10)
    const dateMonth = lotto.data.slice(5, 7)
    const dateYear = lotto.data.slice(0, 4)
    let dateFinal = `${dateDay}/${dateMonth}/${dateYear}`
    return (
      dateFinal
    )
  }
  const dateNew = lotto && lotto.data && dateLotto(lotto)

  return (
    <MainContainer>

      <DropDown>
        <DropDownButton ><option>Mega-Sena</option></DropDownButton>
        <DropDownMenu>
          <a href="/dia+de+sorte">Dia de Sorte</a>
          <a href="/loto+facil">Loto Fácil</a>
          <a href="/loto+mania">Loto Mania</a>
          <a href="/quina">Quina</a>
          <a href="/time+mania">Time Mania</a>
        </DropDownMenu>
      </DropDown>

      <LottoLogo>
        <img src={MegaSena_Logo} />
        <img src={MegaSena_Name} />
      </LottoLogo>


      <DivId>
        Concurso
        <br></br>
        {lotto.id} - {dateNew}
      </DivId>

      <DivNumbers>
        {numbersMap}
      </DivNumbers>


      <Footer>
        <br></br>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
      </Footer>





    </MainContainer>
  );
}

export default MegaSenaPage
