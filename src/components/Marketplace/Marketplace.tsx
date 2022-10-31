import { Badge, Drawer, Grid, Button, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import Cart from './Cart';
import Item from './Item';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AllProducts } from './AllProducts';

const Wrapper = styled.div`
  margin: 40px;
`;

const Marketplace = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        'products',
        AllProducts
    );

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

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Что-то пошло не так...</div>;

    return (
        <Wrapper>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <Button style={{ color: '#000', backgroundColor: '#74546e', position: 'fixed', zIndex: 100, left: '50px', bottom: '50px' }} onClick={() => setCartOpen(true)} >
                <Badge sx={{ color: '#fff' }} badgeContent={getTotalItems(cartItems)} color='error'>
                    <AddShoppingCartIcon sx={{ color: '#fff' }} /> Корзина
                </Badge>
            </Button>
            <Grid container spacing={3}>
                {data?.map(item => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default Marketplace;