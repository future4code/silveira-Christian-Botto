import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"
import { goBack } from "../routes/coordinator";

const TripDetailsPage = () => {

  useProtectedPage() 
 

  const navigate = useNavigate()

  const [dest, setDest] = useState([]);

  useEffect((id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/trip/${id}`
      const token = localStorage.getItem("token");
      console.log({id})
      const headers = {
        headers: {
          "auth": token
        }
      }
      axios
      .get(url, headers)
      .then((response) => {
        console.log(response.data)
        setDest(response.data)
      })
      .catch((error) => {
        alert("error")
      });
  }, []);



  return (
    <div >
      <p>Trip Details</p>
      <button onClick={() => goBack(navigate)} > go back</button>
    </div>
  );
}

export default TripDetailsPage

