import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Button } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: FunctionComponent<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Цена: ₽{item.price}</p>
        <p>Итого: ₽{(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button size='small' disableElevation variant='contained' onClick={() => removeFromCart(item.id)}>-</Button>
        <p>{item.amount}</p>
        <Button size='small' disableElevation variant='contained' onClick={() => addToCart(item)}>+</Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;