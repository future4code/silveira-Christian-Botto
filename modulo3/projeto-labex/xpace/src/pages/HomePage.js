import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { goToListPage, goToLoginPage, goToAdminPage } from "../routes/coordinator";


const HomePage = () => {

const navigate = useNavigate()



  return (
    <div >
    HomePage
    <button onClick={() => goToListPage(navigate)} > list</button>
    <button onClick={() => goToLoginPage(navigate)} > login</button>
    <button onClick={() => goToAdminPage(navigate)} > adm</button>
    </div>
  );
}

export default HomePage
