import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => (

  <Box mt="80px" bgcolor="#1763c0" color='white'>

    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>

    <Typography variant="h3" sx={{ fontSize: { lg: '60px', xs: '40px' } }} mt="21px" textAlign="center" pb="40px" fontWeight='bold'>GET IN GET FIT.</Typography>
  </Box>
);

export default Footer;