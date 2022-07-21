import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import BannerImage from '../assets/images/home_image.png';

const Banner = () => {
    return (
        <Box sx={{
            mt: { lg: 'px', xs: '70px' },
            ml: { sm: '50px' }
        }}
            position='relative'
            p='20px'>

            <Typography color='darkBlue' fontWeight='600' fontSize='35px' marginTop='35px'>
                Fitness Club
            </Typography>

            <Typography
                fontWeight={700}
                marginTop='30px'
                marginBottom='38px'
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Get In. <br />
                Get Fit.
            </Typography>

            <Typography
                fontSize='25px'
                lineHeight='50px'
                mb={5}
                marginTop='15px'>
                Check out the most effective exercises
            </Typography>

            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '250px', textAlign: 'center', background: '#2263aa', padding: '15px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', fontWeight: '600' }}>Explore Exercises</a>
            </Stack>

            <img src={BannerImage} alt="banner" className='banner-img' />
            <Typography
                fontWeight={600}
                color="black"
                sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
        </Box>
    )
}

export default Banner;

