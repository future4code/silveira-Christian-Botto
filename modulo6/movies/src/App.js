// Libraries
import React from "react";
import Router from "./router/Router";
 
// Routes
import { BrowserRouter } from "react-router-dom"

// Components
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
        <Header/>        
        <Router />        
      </BrowserRouter>
  );
}

export default App;
