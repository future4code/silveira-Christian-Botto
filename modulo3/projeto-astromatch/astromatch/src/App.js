import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Prof from "./components/Prof/Prof";
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `


function App() {
  const [page, setPage] = useState("Home")

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home gotoProf = {gotoProf} />;
      case "Prof":
        return <Prof gotoHome = {gotoHome} />
    }
  }

  const gotoHome = () => {
    setPage("Home")
  }

  const gotoProf = () => {
    setPage("Prof")
  }

  return (
    <MainContainer>
      {renderPage()}

    </MainContainer>

  )

}

export default App;
