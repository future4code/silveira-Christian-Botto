import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { goBack, goToTripsPage } from "../routes/coordinator";

const ListTripsPage = () => {

    const navigate = useNavigate()

// funções para pegar api

// map para gerar a lista

  return (
    <div >
     ListTripsPage
    <button onClick={() => goBack(navigate)} > go back</button>
    <button onClick={() => goToTripsPage(navigate)} > form</button>
    </div>
  );
}

export default ListTripsPage
