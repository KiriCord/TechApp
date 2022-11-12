import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import CartItem from './CartItem';
import { Typography } from '@mui/material';

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
`;

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: FunctionComponent<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    return (
        <Wrapper>
            <Typography sx={{ margin: '5px' }} variant='h5'>Ваша корзина</Typography>
            {cartItems.length === 0 ? <Typography sx={{ margin: '15px' }} variant='body1'>Корзина пуста.</Typography> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <Typography sx={{ margin: '15px' }} variant='h5'>Общая сумма: ₽{calculateTotal(cartItems).toFixed(2)}</Typography>
        </Wrapper>
    );
};

export default Cart;