import React from "react";
import axios from "axios";
import styled from "styled-components";
import Router from "./routes/Router";
import { useNavigate} from "react-router-dom";

export const CardContainer = styled.div`
    border: 1px solid gray;
    width: 500px;
    height: 600px;
    margin-bottom: 2vh;
    background: lightblue;
    display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;  
  button {
  background-color: lightslategrey
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;};
  p {
    font-weight: normal;
    font-size: 25px;
  }
  `


function App() {


  return (
    <CardContainer >
      <Router />
    </ CardContainer>
  );
}

export default App;
