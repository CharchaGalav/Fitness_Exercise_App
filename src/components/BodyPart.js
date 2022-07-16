import React from 'react';
import {Stack, Typography} from '@mui/material';
// import Icon from '..assets/icons/gyn.png';


const BodyPart = () => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodypart-card'
    >
        <img src={Icon} alt='dumbell'styles={{width: '40px', height: '40px'}} />
    </Stack>
  )
}

export default BodyPart