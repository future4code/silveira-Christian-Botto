import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { goBack} from "../routes/coordinator";

const LoginPage = () => {

    const navigate = useNavigate()


  return (
    <div >
     LoginPage

     <button onClick={() => goBack(navigate)} > go back</button>
     <button onClick={() => goBack(navigate)} >LOGIN</button>
    </div>
  );
}

export default LoginPage
