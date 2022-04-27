import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"

const TripDetailsPage = () => {

  useProtectedPage()

  // useEffect(() => {

  //   axios.get

  //     , []
  // })



  return (
    <div >
      TripDetailsPage
    </div>
  );
}

export default TripDetailsPage
