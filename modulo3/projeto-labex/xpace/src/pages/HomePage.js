import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToListPage, goToLoginPage, goToAdminPage } from "../routes/coordinator";



const HomePage = () => {

  const navigate = useNavigate()



  return (
    <div>
      <p>Home Page</p>
      <br></br>
      <button onClick={() => goToListPage(navigate)} > list</button>
      <button onClick={() => goToAdminPage(navigate)} > adm</button>
    </div>
  );
}

export default HomePage
