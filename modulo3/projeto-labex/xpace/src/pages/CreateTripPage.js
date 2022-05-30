import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"
import { goToAdminPage } from "../routes/coordinator";
import { useForm } from "../hooks/useForm"

const CreateTripPage = () => {

  const { form, onChange, cleanFields } = useForm({
    id: "",
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const navigate = useNavigate()

  useProtectedPage()

  const onSubmitCreate = (event) => {
    event.preventDefault()

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/trips"
    const token = localStorage.getItem("token");
    const body = {
      "name": form.name,
      "planet": form.planet,
      "date": form.date,
      "description": form.description,
      "durationInDays": form.duration
    }
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'auth': token
      }
    }
    axios
      .post(url, body, headers)
      .then((response) => {
        cleanFields();
        alert("Success")
      })
      .catch((error) => {
        alert("error")
      })
  }
  

  return (
    <div >
      <p>Create Trip</p>
      <form onSubmit={onSubmitCreate} >
      <br></br>
        <input
          name={"name"}
          type='text'
          value={form.name}
          onChange={onChange}
          placeholder="Name"
          required
          pattern={"^.{5,}"}
          title={"Must have at least 5 characters"}
        />
        <br></br>
        <input
          name={"planet"}
          type='text'
          value={form.planet}
          onChange={onChange}
          placeholder="Planet"
          required
        />
        <br></br>
        <input
          name={"date"}
          type='date'
          value={form.date}
          onChange={onChange}
          placeholder="Date"
          required
        />
        <br></br>
        <input
          name={"description"}
          type='text'
          value={form.description}
          onChange={onChange}
          placeholder="Description"
          required
          pattern={"^.{30,}"}
          title={"Must have at least 30 characters"}
        />
        <br></br>
        <input
          name={"duration"}
          type='number'
          value={form.duration}
          onChange={onChange}
          placeholder="Duration"
          required
        />
        <br></br>
        <button >Create</button>
      </form>
      <br></br>
      <button onClick={() => goToAdminPage(navigate)} > adm</button>
    </div>
  );
}

export default CreateTripPage
