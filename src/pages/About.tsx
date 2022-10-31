import { Avatar, Container, Divider, Paper, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import * as img from "../components/import";

const About = () => {
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        О себе
                    </Typography>
                    <Box sx={{ p: 2 }} display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ bgcolor: "#A833FF", width: 200, height: 200 }}>Delta</Avatar>
                    </Box>
                    <Typography align="center" variant="body1" gutterBottom>
                        Гайсина Аделя
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <Typography sx={{ p: 1 }} align="center" variant="body1" gutterBottom>
                        Студентка Башкирского государственного университета очного и заочного отделения. Работаю также в БашГУ.
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Button href="https://vk.com/id0" > VK</Button>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default About;