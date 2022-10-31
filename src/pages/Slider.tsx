import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Images = ["https://cdna.artstation.com/p/assets/images/images/036/640/248/large/surendra-rajawat-beautiful-day-web.jpg",
    "https://cdna.artstation.com/p/assets/images/images/030/580/002/large/andreas-rocha-beautifulday01.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/014/616/793/large/shin-jong-hun-422.jpg",
    "https://cdna.artstation.com/p/assets/images/images/050/303/430/large/terraform-studios-022322-totem-xar-vistashot-3-qm.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/023/873/877/large/jef-wu-paintover.jpg",
    "https://cdna.artstation.com/p/assets/images/images/048/755/870/large/jakub-kozlowski-amalfi-as.jpg"];

const Slider = () => {
    return (
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Слайдер-карусель
                    </Typography>
                    <Divider sx={{ p: 1 }} />
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