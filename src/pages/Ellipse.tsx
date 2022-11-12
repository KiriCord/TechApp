import { Container, Paper } from '@mui/material';
import React from 'react';

const Ellipse = () => {
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                </Paper>
            </Container>
        </>
    );
}

export default Ellipse;