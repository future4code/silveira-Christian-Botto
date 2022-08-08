// React
import React from "react";

// Router
import Router from "./router/Router";
import { BrowserRouter } from 'react-router-dom';

// Styles
import { ThemeProvider } from "@mui/material"
import theme from "./constants/theme"
import { GlobalStyled } from "./GlobalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyled/>
        <Router />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
