import React from "react";
import { DropDown, DropDownButton, DropDownMenu } from "./styled";

function MegaSenaPage() {
  return (
    <div>
      MegaSenaPage
      <DropDown>
        <DropDownButton>Mega Sena</DropDownButton>
        <DropDownMenu>
          <a href="/dia+de+sorte">Dia de Sorte</a>
          <a href="/loto+facil">Loto Fácil</a>
          <a href="/loto+mania">Loto Mania</a>
          <a href="/quina">Quina</a>
          <a href="/time+mania">Time Mania</a>
        </DropDownMenu>
      </DropDown>

    </div>
  );
}

export default MegaSenaPage
