'use client'
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Search from './components/Search';
import Actions from './components/Actions';
import Link from 'next/link';
import useUserStore from '@/store/user.store';

const Header = () => {
    const { replaceCart } = useUserStore();
    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let cartData = localStorage.getItem('cartData');
            replaceCart(cartData ? JSON.parse(cartData) : [])
        }
    }, [])

    return (
        <AppBar color="transparent" position="static">
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Link href={`/`} passHref>
                    <Typography variant="h6">Your Logo</Typography>
                </Link>
                <Search />
                <Actions />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
