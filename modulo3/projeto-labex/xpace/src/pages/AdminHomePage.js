import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom";
import { goBack, goToCreatePage, goToIDPage } from "../routes/coordinator";
import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage"


const AdminHomePage = () => {

  useProtectedPage() 

    const navigate = useNavigate()
    const params = useParams()

    const logout = () => {
      const token = window.localStorage.getItem("token")
      localStorage.setItem("token", null);     
    }
    


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
          alert("Error!")
        })
    }

    const deleteTrip = (destination) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/trips/${destination.id}`
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'auth': token
        }
      }
      if (window.confirm(`Do you really want to delete this destination?`)) {
          axios
              .delete(url, headers)
              .then((response) => {
                let newList = [...dest]
                const findIndex = newList.findIndex((des) => {
                  return des.name === destination.name
              });
              newList.splice(findIndex, 1);
              setDest(newList)
                  alert(`Deleted successfully!`)
              })
              .catch((error) => {
                  alert("Error!")
              })
      }
    }

  
  
    const listPages = dest.map((destinations) => {
      return (
        <div key={ destinations.id}>       
          {destinations.name}
          <button onClick={() => goToIDPage(navigate, destinations.id)}>Details</button>
          <button onClick={() => deleteTrip(destinations)}>X</button>
          <br />
        </div>
      )
    })
  
  return (
    <div >
    AdminHomePage
        <button onClick={() => goBack(navigate)} > go back</button>
    <button onClick={() => goToCreatePage(navigate)} > Create</button>
    <button onClick={logout } > LOGOUT</button>
    <br />
    <br />
    {listPages}
    </div>
  );
}

export default AdminHomePage


