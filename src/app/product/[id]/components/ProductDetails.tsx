import { Box, Typography, Button } from '@mui/material'
import { Info, Discount } from "@/components/SalesInfo";
import { IProduct } from '@/store/product.store';
import classes from '../product.module.css'
import useUserStore from '@/store/user.store';
import { useRouter } from 'next/navigation';

const ProductDetails = ({ name, id, rating, sold, oldPrice, description, price }: IProduct) => {

    const { cart, setCart } = useUserStore();
    const existInCart = cart.some(p => p.id === id);
    const router = useRouter();

    const handleAddToCart = () => {
        if (existInCart) {
            router.push('/cart');
        } else {
            setCart(id, 1);
        }
    };

    return (
        <Box className={classes.productDetails}>
            <Typography variant="h5">{name}</Typography>
            <Info
                rating={rating}
                sold={sold}
            />
            <Typography variant="body2">{description}</Typography>
            <Box className={classes.PriceBlock}>
                <Discount oldPrice={oldPrice} price={price} />
                <Button
                    onClick={handleAddToCart}
                    color='warning'
                    variant='outlined'
                >
                    {existInCart ? `In Cart` : `Add to cart`}
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails;