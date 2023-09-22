import { Box, Typography } from "@mui/material";
import DiscountIcon from '@mui/icons-material/Discount';
import CalcDiscount from "@/utils/helpers/calcDiscount";

const Discount = ({ oldPrice, price }: { oldPrice: number; price: number }) => {

    const discount = CalcDiscount(oldPrice, price);

    return (
        <Box display="flex" flexDirection="column" >
            <Box display="flex" gap="1rem">
                <Box display="flex" alignItems="center">
                    <Typography variant="h6">
                        -{discount}%
                    </Typography>
                    <DiscountIcon />
                </Box>
                <Typography variant="h4">${price}</Typography>
            </Box>
            <Typography
                variant="h6"
                color="gray"
                sx={{ textDecoration: "line-through" }}
            >
                was: ${oldPrice}
            </Typography>
        </Box>
    )
}

export default Discount;