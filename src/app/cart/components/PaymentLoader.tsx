'use client'

import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography, Backdrop, Dialog } from '@mui/material';
import Link from 'next/link';
import useUserStore from '@/store/user.store';

type PaymentType = {
    open: boolean;
}

const PaymentLoader = ({ open }: PaymentType) => {
    const [loading, setLoading] = useState(false);
    const { clearCart } = useUserStore();

    useEffect(() => {
        if (open) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                clearCart();
            }, 5000);
        }
    }, [open]);

    return (
        <Backdrop
            open={open}
            sx={{ zIndex: 2 }}
            onClick={close}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
            }}>
                {loading ? (
                    <>
                        <CircularProgress color="warning" />
                        <Typography variant='h5'> Payment in progress...</Typography>
                    </>
                ) : (
                    <Dialog
                        open={open}
                        onClose={close}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Payment is success"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {"Return to catalog page for continue sales"}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Link href="/">
                                <Button> {"OK"} </Button>
                            </Link>
                        </DialogActions>
                    </Dialog>
                )}
            </Box>
        </Backdrop>
    );
};

export default PaymentLoader;
