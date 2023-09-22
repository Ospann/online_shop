import { Modal, Box, Typography, IconButton, Divider, TextField, Select, Checkbox, MenuItem } from "@mui/material";
import classes from '../cart.module.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useState } from "react";
import CreditCard from "./CreditCard";
import Paypal from "./Paypal";
import CloseIcon from '@mui/icons-material/Close';

type Payment = {
    open: boolean;
    handleClose: () => void;
}

const PaymentModal = ({ open, handleClose }: Payment) => {
    const secondaryBorder = "2px solid #e6e6e6";
    const primaryBorder = "2px solid #ed6c02";
    const [paymentType, setPaymentType] = useState(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.paymentModal}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Payment with...
                </Typography>
                <Typography color="gray" variant="body2">Choose what service ypu want for transaction</Typography>
                <Box display="flex" gap="1rem">
                    <Box
                        onClick={() => setPaymentType(false)}
                        className={classes.paymentType}
                        border={paymentType ? secondaryBorder : primaryBorder}>
                        <Checkbox color="warning" checked={!paymentType} icon={<CircleOutlinedIcon />} checkedIcon={<RadioButtonCheckedIcon />} />
                        <Typography>Credit Card</Typography>
                        <Typography variant="body2" color="gray">You can use all credit card service. We an accept Visa and Master Card</Typography>
                    </Box>
                    <Box
                        onClick={() => setPaymentType(true)}
                        className={classes.paymentType}
                        border={paymentType ? primaryBorder : secondaryBorder}>
                        <Checkbox color="warning" checked={paymentType} icon={<CircleOutlinedIcon />} checkedIcon={<RadioButtonCheckedIcon />} />
                        <Typography>Paypal</Typography>
                        <Typography variant="body2" color="gray">Insert your account email of paypal. We will process your payment.</Typography>
                    </Box>
                </Box>
                <Divider />
                {paymentType ? <Paypal /> : <CreditCard />}
            </Box>
        </Modal>
    )
}

export default PaymentModal;