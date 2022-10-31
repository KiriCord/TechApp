import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Marketplace from '../components/Marketplace/Marketplace';

const client = new QueryClient();

const Market = () => {
    return (
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Магазин
                    </Typography>
                    <Divider sx={{ p: 1 }} />
                    <QueryClientProvider client={client} >
                        <Marketplace />
                    </QueryClientProvider>
                </Paper>
            </Container>
        </>
        // <div>
        //     <h2 className='text-center'>Список товаров</h2>
        //     <QueryClientProvider client={client} >
        //         <Marketplace />
        //     </QueryClientProvider>
        // </div>
    );
};

export default Market;