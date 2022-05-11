import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  return (
      <AppBar position="static">
        <StyledToolbar >
          <Button color="inherit" onClick={() => goToFeed(navigate)} >Labeddit</Button>
          <Button color="inherit" onClick={() => goToLogin(navigate)} >Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header