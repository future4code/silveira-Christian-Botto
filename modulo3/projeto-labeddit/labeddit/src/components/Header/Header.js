import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = ({logButton, setLogButton}) => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  

  const logout = () => {
    window.localStorage.clear()
  }

  const logButtonAction = () => {
    if (token) {
      logout()
      setLogButton("LOGIN")
      navigate("/login")
    } else {
      navigate("/")
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar >
        <Button color="inherit" onClick={() => goToFeed(navigate)} >Labeddit</Button>
        <Button color="inherit" onClick={logButtonAction} >{logButton}</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header