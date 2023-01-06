import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { image1, image2, image3, image4, image5 } from '../components/import';

const Images = [image1, image2, image3, image4, image5];

const Slider = () => {
    return (
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper style={{backgroundColor: "#fdf8e3"}} elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Слайдер-карусель
                    </Typography>
                    <Carousel sx={{ p: 1 }} animation="fade" autoPlay={true} indicators>
                        {
                            Images.map((item, index) => (<img key={index} alt='' style={{ objectFit: "cover", height: 600, width: "100%" }} src={item} />))
                        }
                    </Carousel>
                </Paper>
            </Container>
        </>
    );
}

export default Slider;