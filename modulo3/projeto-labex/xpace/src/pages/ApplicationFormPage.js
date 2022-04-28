import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const ApplicationFormPage = () => {

  const navigate = useNavigate()

  const onSubmitForm = () => {

  }

  return (
    <div >
      ApplicationFormPage
      <button onClick={() => goBack(navigate)} > Go Back</button>
      <form onSubmit={onSubmitForm} >
        <input
          type='email'
          // value={userEmail}
          // onChange={onChangeEmail}
          placeholder="E-mail"
        />
        <input
          type='password'
          // value={userPassword}
          // onChange={onChangePassword}
          placeholder="Password"
        />
        <button >LOGIN</button>
      </form>

    </div>
  );
}

export default ApplicationFormPage
