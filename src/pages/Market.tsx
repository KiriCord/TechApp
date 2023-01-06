import { Container, Divider, Paper, Typography, Grid, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import Marketplace from '../components/Marketplace/Marketplace'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { CartItemType } from '../Types/Types';
import { AllProducts } from '../components/Marketplace/AllProducts';
import Cart from '../components/Marketplace/Cart';

const client = new QueryClient();

const drawerWidth: number = 350;

const Drawer = styled(MuiDrawer)(
    ({ theme }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box'
        },
    }),
);



const Market = () => {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map(item =>
                    item.id === clickedItem.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        );
    };


    return (
        <>
            <Container component="main" maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={4}>
                        <Paper style={{backgroundColor: "#fdf8e3"}} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Box>
                                <Cart
                                    cartItems={cartItems}
                                    addToCart={handleAddToCart}
                                    removeFromCart={handleRemoveFromCart}
                                />
                            </Box>
                            <Typography sx={{ margin: '15px' }} variant='h5'>Общее количество товаров: {getTotalItems(cartItems)}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <Paper style={{backgroundColor: "#fdf8e3"}} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h5" variant="h5" align="center">
                                Лавка с едой
                            </Typography>
                            <QueryClientProvider client={client} >
                                <Marketplace
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                            </QueryClientProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Market;