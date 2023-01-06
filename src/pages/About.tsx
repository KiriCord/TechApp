import { Avatar, Container, Divider, Paper, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import * as img from "../components/import";

const About = () => {
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper style={{backgroundColor: "#fdf8e3"}} elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        О себе
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <Box sx={{ p: 2 }} display="flex" justifyContent="center" alignItems="center">
                        <Avatar variant="rounded" sx={{ color: '#ffd856', bgcolor: "#2d2a4b", width: 200, height: 200 }}>Дарья</Avatar>
                    </Box>
                    <Typography align="center" variant="body1" gutterBottom>
                    Дарья Боровская
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <Typography sx={{ p: 1 }} align="center" variant="body1" gutterBottom>
                        Учусь в Уфимском университете науки и технологий на факультете математики и информационных технологий.
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