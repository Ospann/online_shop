'use client'
import useUserStore from "@/store/user.store";
import useProductStore from "@/store/product.store";
import { Popover, Box, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ICart = {
    open: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const CartModal = ({ open, anchorEl, handleClose }: ICart) => {
    const { cart } = useUserStore();
    const { products } = useProductStore();

    let total = 0;

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Box style={{
                boxSizing: 'border-box',
                padding: '1rem',
                display: 'flex',
                width: '250px',
                height: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between',

            }}>
                <Box overflow="auto">
                    {cart.length === 0 ? (
                        <Typography>Your cart is empty</Typography>
                    ) : (
                        cart.map((item) => {
                            const { name, images, price } = products.filter(p => p.id === item.id)[0];
                            total += price * item.qty;
                            return <Box
                                key={item.id}
                                borderTop="1px solid #e6e6e6"
                                borderBottom="1px solid #e6e6e6"
                                padding="0.5rem"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Image
                                    alt={name}
                                    src={images[0]}
                                    width={70}
                                    height={50}
                                />
                                {item.qty} x ${price}
                            </Box>
                        })
                    )}
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem">
                    <Divider />
                    <Box display="flex" justifyContent="space-between">
                        <Typography>Total</Typography>
                        <Typography>${total}</Typography>
                    </Box>
                    <Link href={`/cart`}>
                        <Button
                            variant="outlined"
                            disabled={cart.length === 0}
                            color="warning"
                            fullWidth>
                            Order Now
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Popover>
    )
}

export default CartModal;