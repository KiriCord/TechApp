import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: FunctionComponent<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <hr />
      <p>{item.description}</p>
      <hr />
      <Button style={{ backgroundColor: '#435b76' }} variant="contained"><CurrencyRubleIcon />{item.price}</Button>
    </div>
    <Button style={{ backgroundColor: "#222d3b" }} variant="contained" onClick={() => handleAddToCart(item)}>Добавить в корзину</Button>
  </Wrapper >
);

export default Item;

