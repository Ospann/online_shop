import { Box, Typography, Divider, Button } from '@mui/material'
import Link from 'next/link';
import useUserStore from '@/store/user.store';
import { IProduct } from '@/store/product.store';
import Stepper from '@/components/Stepper';
import { useState } from 'react';
import classes from '../product.module.css';

const SalesBlock = ({ id, price }: IProduct) => {
    const { setCart, cart } = useUserStore();
    const [step, setStep] = useState(1);

    const handleClick = (step: number) => setStep(step);

    const existInCart = cart.some(x => x.id === id);

    return (
        <Box className={classes.salesBlock}>
            <Box className={classes.PriceBlock}>
                <Typography>Text</Typography>
                <Stepper
                    step={step}
                    handleClick={handleClick}
                />
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">
                        Price
                    </Typography>
                    <Typography variant="h6">
                        {step} x ${price}
                    </Typography>
                </Box>
                <Divider />
            </Box>
            <Box display="flex" flexDirection="column" gap="1rem">
                <Box display="flex" justifyContent="space-between" >
                    <Typography variant="body1">
                        Total
                    </Typography>
                    <Typography variant="h6">
                        ${price * step}
                    </Typography>
                </Box>
                <Button
                    fullWidth
                    color="warning"
                    onClick={() => setCart(id, step)}
                    variant="contained">
                    {existInCart ? "In Cart" : "Add to Cart"}
                </Button>
                <Link href={`/cart`} passHref onClick={() => setCart(id, step)}>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="warning"
                    >
                        Buy Now
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default SalesBlock;