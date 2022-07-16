import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/home_image.jpg';
// import App from '../src/App.css';

const Banner = () => {
    return (
        <Box sx={{
            mt: { lg: 'px', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px'>

            <Typography color='darkBlue' fontWeight='600' fontSize='30px'>
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Get In. <br />
                Get Fit.
            </Typography>
            <Typography fontSize='22px' lineHeight='50px' mb={5}>
                Check out the most effective exercises
            </Typography>
            
            <Button variant='contained' href="#excercises">
                Explore Exercises
            </Button>
            <img src={BannerImage} alt="banner" className='banner-img' />
            <Typography fontWeight={600} color="darkGreen" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
        </Box>
    )
}

export default Banner