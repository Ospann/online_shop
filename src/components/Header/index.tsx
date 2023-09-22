'use client'

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Search from './components/Search';
import Actions from './components/Actions';
import Link from 'next/link';

const Header = () => {
    return (
        <AppBar color="transparent" position="static">
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Link href={`/`}>
                    <Typography variant="h6">Your Logo</Typography>
                </Link>
                <Search />
                <Actions />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
