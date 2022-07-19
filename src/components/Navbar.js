import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm: '120px', xs: '40px'},justifyContent: 'none'}}>
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: '120px', height: '100px'
        }} />
      </Link>
      <Stack 
      direction= 'row'
      gap= '40px'
      fontSize= '25px'
      marginTop='35px'
      fontWeight= 'bold'
      >
        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid blue'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar

