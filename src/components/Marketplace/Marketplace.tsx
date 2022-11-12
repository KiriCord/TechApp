import { Badge, Grid, Button, LinearProgress, Box } from '@mui/material';
import { useState, FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { CartItemType } from '../../Types/Types';
import Cart from './Cart';
import Item from './Item';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AllProducts } from './AllProducts';

type Props = {
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Marketplace: FunctionComponent<Props> = ({ handleAddToCart, handleRemoveFromCart }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        'products',
        AllProducts
    );

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Что-то пошло не так...</div>;

    return (
        <div style={{ margin: 40 }}>
            <Grid container spacing={3}>
                {data?.map(item => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} handleAddToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Marketplace;