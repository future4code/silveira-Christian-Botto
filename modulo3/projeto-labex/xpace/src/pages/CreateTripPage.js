import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"
import { goToAdminPage } from "../routes/coordinator";

const CreateTripPage = () => {

  const navigate = useNavigate()
  
  useProtectedPage() 

  return (
    <div >
     CreateTripPage
     <button onClick={() => goToAdminPage(navigate)} > adm</button>
    </div>
  );
}

export default CreateTripPage
