import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  
  <Stack
    type="button"
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={
      bodyPart === item ? { borderTop: '4px solid black', background: 'white', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: 'white', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>

    <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px' }} />

    <Typography
      fontSize="24px"
      fontWeight="bold"
      color="black"
      textTransform="capitalize"
      marginTop="25px" >
      {item}
    </Typography>

  </Stack>
);


export default BodyPart;

