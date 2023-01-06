import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import Calc from '../components/Calculator/Calc';

const Calculator = () => {

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper style={{backgroundColor: "#fdf8e3"}} elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Калькулятор
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <Calc />
                </Paper>
            </Container>
        </>
    );
}

export default Calculator;