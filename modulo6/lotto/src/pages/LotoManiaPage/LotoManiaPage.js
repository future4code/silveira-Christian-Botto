import React from "react";
import { DropDownButton, DropDownMenu } from "./styled";

function LotoManiaPage() {
  return (
    <div>
      LotoManiaPage
      <DropDownMenu>
        <DropDownButton>Loto Mania</DropDownButton>
        <a href="/dia+de+sorte">Dia de Sorte</a>
        <a href="/loto+facil">Loto Fácil</a>
        <a href="/">Mega Sena</a>
        <a href="/quina">Quina</a>
        <a href="/time+mania">Time Mania</a>
      </DropDownMenu>
    </div>
  );
}

export default LotoManiaPage
