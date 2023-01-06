import styled from 'styled-components';
import { CartItemType } from '../../Types/Types';
import { FunctionComponent } from 'react';
import { Box, Button, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .information {
    margin-left: 40px;
  },
  .buttons {
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
  <Card style={{backgroundColor: "#fffee6"}} elevation={3} sx={{ display: 'flex', margin: 1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="body1">
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Цена: ₽{item.price}<br />
          Количество: {item.amount} <br />
          Итого за товар: ₽{(item.amount * item.price).toFixed(2)}
        </Typography>
      </CardContent>
    </Box>
    <Box>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 200 }}
        image={item.image}
        alt={item.title}
      />
    </Box>
  </Card>
  // <Wrapper>
  //   <div>
  //     <h4>{item.title}</h4>
  //     <img src={item.image} alt={item.title} />
  //     <div className="information">
  //       <p>Цена: ₽{item.price}</p>
  //       <p>Итого: ₽{(item.amount * item.price).toFixed(2)}</p>
  //     </div>
  //     <div className='buttons'>
  //       <Button sx={{ backgroundColor: '#74546e' }} size='small' disableElevation variant='contained' onClick={() => removeFromCart(item.id)}>-</Button>
  //       <p>{item.amount}</p>
  //       <Button sx={{ backgroundColor: '#74546e' }} size='small' disableElevation variant='contained' onClick={() => addToCart(item)}>+</Button>
  //     </div>
  //   </div>
  // </Wrapper>
);

export default CartItem;