import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToTripsPage } from "../routes/coordinator";

const ListTripsPage = () => {

  const navigate = useNavigate()

  const [dest, setDest] = useState([]);

  useEffect(() => {
    getList()
  }, []);



  const getList = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/trips'
    axios
      .get(url)
      .then((response) => {
        setDest(response.data.trips)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }


  const listPages = dest.map((destinations) => {
    return (
      <>       
        Name: {destinations.name}
        <br />
        Description: {destinations.description}
        <br />
        Destination: {destinations.planet}
        <br />
        Duration (days): {destinations.durationInDays}
        <br />
        WHen: {destinations.date}
        <br />
        <br />
      </>
    )
  })


  return (
    <div >
      <p> Destinations</p>
      <br></br>
      <button onClick={() => goBack(navigate)} > go back</button>
      <button onClick={() => goToTripsPage(navigate)} > form</button>
      <br />
      <br />
      {listPages}
    </div>
  );
}

export default ListTripsPage
