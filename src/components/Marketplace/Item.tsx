import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    // height: 100%;
  }
`;

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Item: FunctionComponent<Props> = ({ item, handleAddToCart, removeFromCart }) => (
  <Wrapper>
    <Box style={{height:"100%"}}>
      <img src={item.image} alt={item.title} />
      <Button style={{ backgroundColor: '#30274b' }} variant="contained" onClick={() => handleAddToCart(item)}><CurrencyRubleIcon />{item.price}</Button>
    </Box>
    <Divider sx={{ p: 1 }} />
    <Box style={{height:"100%"}}>
      <Typography variant='h5'>{item.title}</Typography>
      <Typography variant='body1'>{item.description}</Typography>
    </Box>
    <Box>
      <Fab size="small" style={{ backgroundColor: "#f7dd58", float:"left" }} onClick={() => removeFromCart(item.id)}><RemoveIcon /></Fab>
      <Fab size="small" style={{ backgroundColor: "#f7dd58", float:"right" }} onClick={() => handleAddToCart(item)}><AddIcon /></Fab>
    </Box>
    <Button style={{ backgroundColor: "#30274b"}} variant="contained" onClick={() => handleAddToCart(item)}>Добавить в корзину</Button>
  </Wrapper >
);

export default Item;

