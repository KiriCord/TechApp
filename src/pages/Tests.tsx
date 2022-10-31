import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import Quiz from '../components/Quiz/Quiz';

const Tests = () => {
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Тест
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <Quiz />
                </Paper>
            </Container>
        </>
    );
}

export default Tests;