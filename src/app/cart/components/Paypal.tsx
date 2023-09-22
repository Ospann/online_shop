import React, { useState } from 'react';
import { Box, InputLabel, Button, TextField, IconButton, InputAdornment, FormControl, FormHelperText } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PaymentLoader from './PaymentLoader';

const Paypal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [paymentSucc, setPaymentSucc] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);

        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setEmailError(!emailPattern.test(enteredEmail));
    };

    const handlePressButton = () => {
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
        const isPasswordValid = password.length >= 6; 

        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);

        if (isEmailValid && isPasswordValid) {
            setPaymentSucc(true)
        }
    }

    return (
        <Box display="flex" flexDirection="column" gap="1rem">
            <Box display="flex" flexDirection="column">
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                    id="email"
                    size="small"
                    fullWidth
                    error={emailError}
                    placeholder="test@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && (
                    <FormHelperText error>Email is invalid</FormHelperText>
                )}
            </Box>
            <Box display="flex" flexDirection="column">
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                    id="password"
                    size="small"
                    fullWidth
                    error={passwordError}
                    placeholder="***"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {passwordError && (
                    <FormHelperText error>Password should be at least 6 characters long</FormHelperText>
                )}
            </Box>
            <PaymentLoader open={paymentSucc} />
            <Button
                fullWidth
                variant="contained"
                color="warning"
                onClick={handlePressButton}
            >
                Pay now
            </Button>
        </Box>
    );
};

export default Paypal;
