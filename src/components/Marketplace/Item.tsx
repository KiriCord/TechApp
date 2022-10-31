import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  height: 100%;
  img {
    max-height: 250px;
    object-fit: cover;
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
    <Button style={{ backgroundColor: '#2fc84a' }} variant="contained" onClick={() => handleAddToCart(item)}><CurrencyRubleIcon />{item.price}</Button>
    <Box>
      <Typography sx={{ margin: '5px' }} variant='h5'>{item.title}</Typography>
      <Typography variant='body1'>{item.description}</Typography>
    </Box>
    <Button style={{ backgroundColor: "#74546e" }} variant="contained" onClick={() => handleAddToCart(item)}>Добавить в корзину</Button>
  </Wrapper >
);

export default Item;

