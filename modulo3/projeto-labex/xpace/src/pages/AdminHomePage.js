import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom";
import { goBack, goToCreatePage, goToIDPage } from "../routes/coordinator";

const AdminHomePage = () => {

    const navigate = useNavigate()
    const params = useParams()

  return (
    <div >
    AdminHomePage
    <button onClick={() => goBack(navigate)} > go back</button>
    <button onClick={() => goToCreatePage(navigate)} > Create</button>
    <button onClick={() => goBack(navigate)} > LOGOUT</button>
    <button onClick={() => goToIDPage(navigate, params)} > Destination</button>
    </div>
  );
}

export default AdminHomePage
