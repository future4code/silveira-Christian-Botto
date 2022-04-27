import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"

const CreateTripPage = () => {

  useProtectedPage() 

  return (
    <div >
     CreateTripPage
    </div>
  );
}

export default CreateTripPage
