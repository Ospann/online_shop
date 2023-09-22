import { Box, InputLabel, FormHelperText, Typography, Button, Divider, TextField, Select, Checkbox, MenuItem, SelectChangeEvent } from "@mui/material";
import PaymentLoader from "./PaymentLoader";
import { useState } from "react";
import Months from "@/constants/month";
import years from "@/constants/years";
import classes from '../cart.module.css'

const CreditCard = () => {
    const [paymentSucc, setPaymentSucc] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        card: '',
        selectedMonth: '',
        selectedYear: '',
        cvv: '',
    });

    const [formErrors, setFormErrors] = useState({
        nameError: false,
        cardError: false,
        selectedMonthError: false,
        selectedYearError: false,
        cvvError: false,
    });

    const handleFieldChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.slice(0, 3);
        setFormData({
            ...formData,
            cvv: inputValue,
        });
    }

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.replace(/\s/g, '');
        const formattedValue = inputValue.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setFormData({
            ...formData,
            card: formattedValue,
        });
    }

    const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uppercaseName = event.target.value.slice(0, 16).toUpperCase();
        setFormData({
            ...formData,
            name: uppercaseName,
        });
    }

    const handlePress = () => {
        const errors = {
            nameError: formData.name === "",
            cardError: formData.card === "",
            selectedMonthError: formData.selectedMonth === "",
            selectedYearError: formData.selectedYear === "",
            cvvError: formData.cvv === "",
        };

        setFormErrors(errors);

        if (!Object.values(errors).some((error) => error)) {
            setPaymentSucc(true)
        }
    }

    return (
        <Box display="flex" flexDirection="column" gap="1rem">
            <Box>
                <Box className={classes.InputBody} display="flex" gap="1rem">
                    <Box className={classes.InputBox}>
                        <InputLabel htmlFor="name">Card Name</InputLabel>
                        <TextField
                            id="name"
                            size="small"
                            fullWidth
                            placeholder="Name"
                            onChange={handleCardNameChange}
                            error={formErrors.nameError}
                        />
                        {formErrors.nameError && (
                            <FormHelperText error>{`Card Name can't be empty`}</FormHelperText>
                        )}
                    </Box>
                    <Box className={classes.InputBox}>
                        <InputLabel htmlFor="card">Card Number</InputLabel>
                        <TextField
                            id="card"
                            size="small"
                            fullWidth
                            error={formErrors.cardError}
                            placeholder="1234 1234 1234 1234"
                            onChange={handleCardNumberChange}
                        />
                        {formErrors.cardError && (
                            <FormHelperText error>{`Card Number can't be empty`}</FormHelperText>
                        )}
                    </Box>
                </Box>
                <Box className={classes.InputBody} display="flex" gap="1rem">
                    <Box className={classes.InputBox}>
                        <InputLabel htmlFor="month">Month</InputLabel>
                        <Select
                            id="month"
                            name="selectedMonth"
                            size="small"
                            fullWidth
                            placeholder="Select Month"
                            displayEmpty
                            error={formErrors.selectedMonthError}
                            onChange={handleFieldChange}
                            value={formData.selectedMonth}
                            inputProps={{ 'aria-label': 'Month' }}
                        >
                            <MenuItem value="" disabled>
                                Select Month
                            </MenuItem>
                            {Months.map((month, index) => (
                                <MenuItem key={index} value={month.en}>{month.en}</MenuItem>
                            ))}
                        </Select>
                        {formErrors.selectedMonthError && (
                            <FormHelperText error>{`Month can't be empty`}</FormHelperText>
                        )}
                    </Box>
                    <Box className={classes.InputBox} >
                        <InputLabel htmlFor="years">Years</InputLabel>
                        <Select
                            id="years"
                            name="selectedYear"
                            size="small"
                            fullWidth
                            error={formErrors.selectedYearError}
                            placeholder="Select Years"
                            value={formData.selectedYear}
                            onChange={handleFieldChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Years' }}
                        >
                            <MenuItem value="" disabled>
                                Select Years
                            </MenuItem>
                            {years.map((year, index) => (
                                <MenuItem key={index} value={year}>{year}</MenuItem>
                            ))}
                        </Select>
                        {formErrors.selectedYearError && (
                            <FormHelperText error>{`Year can't be empty`}</FormHelperText>
                        )}
                    </Box>
                    <Box className={classes.InputBox} >
                        <InputLabel htmlFor="cvv">CVV</InputLabel>
                        <TextField
                            id="cvv"
                            error={formErrors.cvvError}
                            size="small"
                            fullWidth
                            placeholder="000"
                            onChange={handleCvvChange}
                            value={formData.cvv}
                        />
                        {formErrors.cvvError && (
                            <FormHelperText error>CVV must contain 3 characters</FormHelperText>
                        )}
                    </Box>
                </Box>
            </Box>
            <PaymentLoader open={paymentSucc}/>
            <Button
                fullWidth
                variant="contained"
                color="warning"
                onClick={handlePress}
            >Pay now</Button>
        </Box>
    )
}

export default CreditCard;