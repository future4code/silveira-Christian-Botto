import React, {useState} from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from '@mui/material/styles';
import FeedPage from "./pages/FeedPage/FeedPage";
import { Feed } from "@mui/icons-material";
import Header from "./components/Header/Header";
import { BrowserRouter} from "react-router-dom";

function App() {
  const token = localStorage.getItem("token")
  const [logButton, setLogButton] = useState(token ? "LOGOUT" : "LOGIN")
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header 
      logButton = {logButton}
      setLogButton = {setLogButton}
      />
      <Router
      setLogButton = {setLogButton}
      />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
