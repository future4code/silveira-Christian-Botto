import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from '@mui/material/styles';
import FeedPage from "./pages/FeedPage/FeedPage";
import { Feed } from "@mui/icons-material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App
