import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

const LoginPage = () => {

  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");


  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setUserEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setUserPassword(event.target.value)
  }

  const onSubmitLogin = (event) => {
    event.preventDefault()

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/login"
    const body = {
      email: userEmail,
      password: userPassword
    }
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios
      .post(url, body, headers)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        alert("error")
      })
  }


  return (
    <div >
      LoginPage
      <form onSubmit={onSubmitLogin} >
        <input
          type='email'
          value={userEmail}
          onChange={onChangeEmail}
          placeholder="E-mail"
        />
        <input
          type='password'
          value={userPassword}
          onChange={onChangePassword}
          placeholder="Password"
        />
        <button >LOGIN</button>
      </form>
      <button onClick={() => goToHomePage(navigate)} > go back</button>
    </div>
  );
}

export default LoginPage



