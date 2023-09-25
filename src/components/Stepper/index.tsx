import { Box, Button } from "@mui/material";

type StepperType = {
    step: number;
    handleClick: (step: number) => void;
}

const Stepper = ({ step, handleClick }: StepperType) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e6e6e6',
            borderRadius: '5px',
        }}>
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