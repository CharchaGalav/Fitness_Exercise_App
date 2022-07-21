import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>

      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />

      <Stack direction="row">

        <Button sx={{ ml: '21px', color: 'ButtonHighlight', background: 'grey', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>

        <Button sx={{ ml: '21px', color: 'ButtonHighlight', background: '#030000', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>

      </Stack>

      <Typography ml='21px' color='#7008d0' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px' >
        {exercise.name}
      </Typography>

    </Link>
  )
}

export default ExerciseCard;

