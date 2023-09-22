import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Box, CardActions, CardContent, CardMedia, Card, IconButton, Typography } from '@mui/material'
import Link from 'next/link';
import useUserStore from '@/store/user.store';
import { Info } from '../SalesInfo';
import classes from './card.module.css';

interface ICard {
    name: string;
    rating: string;
    sold: number;
    price: number;
    oldPrice: number;
    images: string[];
    id: number;
}

const CardBlock = ({ name, rating, sold, price, oldPrice, images, id }: ICard) => {

    const { setCart, cart } = useUserStore();
    const existInCart = cart.some(c => c.id === id);

    return (
        <Card className={classes.card}>
            <Link href={`/product/${id}`} passHref>
                <CardMedia
                    sx={{ cursor: "pointer", objectFit: "contain" }}
                    component="img"
                    height="150"
                    image={images[0]}
                    alt="Paella dish"
                />
            </Link>
            <Box className={classes.cardBody}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Typography variant="h6" component="div">
                            ${price}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textDecoration: 'line-through' }}
                        >
                            ${oldPrice}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Info rating={rating} sold={sold} />
                    <Box sx={{
                        border: '1px solid #ed6c02',
                        backgroundColor: existInCart ? '#ed6c02' : 'white',
                        color: 'white',
                        borderRadius: '40px'
                    }}>
                        <IconButton
                            aria-label="delete"
                            onClick={() => setCart(id, 1)}
                            sx={{
                                color: existInCart ? 'white' : '#ed6c02'
                            }}
                        >
                            <ShoppingBasketOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                </CardActions>
            </Box>
        </Card>
    );
}

export default CardBlock;