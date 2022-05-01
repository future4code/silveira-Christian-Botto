import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import { useForm } from "../hooks/useForm"

const LoginPage = () => {

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });


  const navigate = useNavigate()


  const onSubmitLogin = (event) => {
    event.preventDefault()

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/login"
    const body = {
      email: form.email,
      password: form.password
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
       <p>Login</p>
      <form onSubmit={onSubmitLogin} >
        <input
        name={"email"}
          type='email'
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
        />
        <input
        name={"password"}
          type='password'
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button >LOGIN</button>
      </form>
      <button onClick={() => goToHomePage(navigate)} > go back</button>
    </div>
  );
}

export default LoginPage



