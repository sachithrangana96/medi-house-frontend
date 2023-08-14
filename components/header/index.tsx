"use client";
import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: '#2196F3', // Blue color
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const Index = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">
            <img src="/logo.png" alt="Logo" height={30} />
            Your App Name
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Index
