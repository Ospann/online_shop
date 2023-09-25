import { Box, Button } from "@mui/material";
import classes from './stepper.module.css'
type StepperType = {
    step: number;
    handleClick: (step: number) => void;
}

const Stepper = ({ step, handleClick }: StepperType) => {
    return (
        <Box className={classes.stepper}>
            <Button
                color="warning"
                variant="contained"
                onClick={() => handleClick(step - 1)}
                disabled={step === 1}
            >-</Button>
            <span>{step}</span>
            <Button
                color="warning"
                variant="contained"
                onClick={() => handleClick(step + 1)}
            >+</Button>
        </Box>
    )
}

export default Stepper;