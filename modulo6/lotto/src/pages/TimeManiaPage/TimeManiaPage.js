import React, { useState, useEffect } from "react";
import {DropDown, DropDownButton, DropDownMenu, LottoLogo, LottoLogoLogo, DivNumberFooter, DivRest,
  LottoLogoName, Footer, DivNumbers, DivId} from "../../styles/styled";
import { MainContainerTimeMania as MainContainer }from "../../styles/styled";
import { useNavigate } from "react-router-dom";
import {goToMegaSenaPage, goToDiaDeSortePage, goToLotoFacilPage, goToLotoManiaPage, goToTimeManiaPage, goToQuinaPage} from "../../router/coordinator"
import axios from "axios";
import { BASE_URL } from "../../constants/constants"
import NumberCards from "../../components/NumberCards";
import MegaSena_Logo from "../../assets/MegaSena_Logo.png"
import MegaSena_Name from "../../assets/MegaSena_Name.png"

function TimeManiaPage() {

  const [lotto, setLotto] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getLotto()
  }, [])

  const getLotto = () => {
    const url = `${BASE_URL}1622`
    axios
      .get(url)
      .then((response) => {
        setLotto(response.data)
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

      <DivRest>
        <DropDown>
          <DropDownButton ><option>Time Mania</option></DropDownButton>
          <DropDownMenu>
            <a onClick={() => goToMegaSenaPage(navigate)}>Mega Sena</a>
            <a onClick={() => goToLotoFacilPage(navigate)}>Loto Facil</a>
            <a onClick={() => goToDiaDeSortePage(navigate)}>Dia de Sorte</a>
            <a onClick={() => goToQuinaPage(navigate)}>Quina</a>
            <a onClick={() => goToDiaDeSortePage(navigate)}>Dia de Sorte</a>
          </DropDownMenu>
        </DropDown>

        <LottoLogo>
          <LottoLogoLogo>
            <img src={MegaSena_Logo} />
          </LottoLogoLogo>
          <LottoLogoName>
            Time Mania
          </LottoLogoName>
        </LottoLogo>


        <DivId>
          Concurso
          <br></br> <br></br>
          {lotto.id} - {dateNew}
        </DivId>
      </DivRest>

      <DivNumberFooter>
        <DivNumbers>
          {numbersMap}
        </DivNumbers>

        <Footer>
          <br></br>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </Footer>
      </DivNumberFooter>






    </MainContainer>
  );
}

export default TimeManiaPage
