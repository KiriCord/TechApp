import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import MoveEllipse from '../components/Moving/MoveEllipse';

const Ellipse = () => {
    return (
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Движение точки по эллипсу
                    </Typography>
                    <MoveEllipse />
                </Paper>
            </Container>
        </>
    );
}

export default Ellipse;