import { Box, Typography, Button } from '@mui/material'
import { Info, Discount } from "@/components/SalesInfo";
import { IProduct } from '@/store/product.store';
import classes from '../product.module.css'
import useUserStore from '@/store/user.store';
import Link from 'next/link';

const ProductDetails = ({ name, id, rating, sold, oldPrice, description, price }: IProduct) => {

    const { cart, setCart } = useUserStore();
    const existInCart = cart.some(p => p.id === id);

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
                <Link href={'/cart'}  prefetch={false} onClick={() => { !existInCart && setCart(id, 1) }}>
                    <Button
                        color='warning'
                        variant='outlined'
                    >
                        Buy Now
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default ProductDetails;