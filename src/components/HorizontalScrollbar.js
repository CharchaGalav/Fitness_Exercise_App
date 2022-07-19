import React from 'react';
import {Box, Stack} from '@mui/material';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';



const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  
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
          
            <BodyPart item = {item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
        )
        )}
    </Stack>
    
  );
}

export default HorizontalScrollbar

