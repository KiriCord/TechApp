import { Container, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import Calendar from '../components/Calendar/Calendar';

const Calendars = () => {
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Box>
                        <Typography variant="h4">Старояпонский календарь</Typography>
                        <Calendar />
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default Calendars;