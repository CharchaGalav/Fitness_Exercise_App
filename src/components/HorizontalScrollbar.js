import React from 'react';
import {Box, Stack} from '@mui/material';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


const HorizontalScrollbar = ({data, bodyParts,setBodyPart, bodyPart}) => {
  
  return (
    
    <Stack direction="row"
    spacing={5}
    overflow="scroll"
    >
        {data.map((item) => (
        <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
       
        
        >
          
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
        )
        )}
    </Stack>
    
  );
}

export default HorizontalScrollbar;

