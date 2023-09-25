'use client'
import { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import useUserStore from "@/store/user.store";
import useProductStore from "@/store/product.store";
import Image from "next/image";
import { Info, Discount } from "@/components/SalesInfo";
import Link from "next/link";
import PaymentModal from "./components/PaymentModal";
import classes from './cart.module.css';
import Stepper from "@/components/Stepper";

const CartPage = () => {
    const { products } = useProductStore();
    const { cart, updateCart } = useUserStore();
    const [open, setOpen] = useState(false);
    console.log(cart);
    let total = 0;
    return (
        <Box className={classes.cartPage}>
            <Box className={classes.productLoop}>
                {cart.map((item, index) => {
                    const { name, images, rating, sold, price, oldPrice } = products.filter(p => p.id === item.id)[0];
                    return <Box className={classes.ProductItem} key={index} >
                        <Box display="flex">
                            <Link href={`/product/${item.id}`}>
                                <Image
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                    alt={name}
                                    src={images[0]}
                                    width={170}
                                    height={150}
                                />
                            </Link>
                            <Box width="50%" display="flex" flexDirection="column" gap="1rem">
                                <Typography variant="h6">
                                    {name}
                                </Typography>
                                <Info rating={rating} sold={sold} />
                            </Box>
                        </Box>
                        <Box className={classes.Details}>
                            <Discount price={price} oldPrice={oldPrice} />
                            <Stepper
                                step={item.qty}
                                handleClick={(step: number) => {
                                    updateCart(item.id, step);
                                }}
                            />
                        </Box>
                    </Box>
                })}
            </Box>
            <Box className={classes.TotalBlock}>
                <Box className="onlyPC" display="flex" flexDirection="column" overflow="auto">
                    <Typography>Text</Typography>
                    {cart.map((item, index) => {
                        const { price, name } = products.filter(p => p.id === item.id)[0];
                        total += item.qty * price;

                        return <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography width="75%" variant="body1">{name}</Typography>
                            <Typography width="25%" variant="h6">{item.qty} x ${price}</Typography>
                        </Box>
                    })}
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem">
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1">Total</Typography>
                        <Typography variant="h6">${total}</Typography>
                    </Box>
                    <Button
                        color="warning"
                        onClick={() => setOpen(true)}
                        variant="contained">
                        Order Now
                    </Button>
                </Box>
            </Box>
            <PaymentModal open={open} handleClose={() => setOpen(prev => !prev)} />
        </Box>
    )
}

export default CartPage;