import { Box, Typography, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';


type sales = {
    rating: string,
    sold: number;
}

const SalesInfo = ({ rating, sold }: sales) => {
    return (
        <Box sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
        }}>
            <Box sx={{
                backgroundColor: '#ed6c02',
                display: 'flex',
                gap: '0.5rem',
                padding: '0 0.5rem',
                borderRadius: '20px',
                alignItems: 'center',
                color: 'white',
            }}>
                <StarIcon color='inherit' fontSize='small' />
                <Typography variant="body1">
                    {rating}
                </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1">
                Sold {sold}
            </Typography>
        </Box>
    )
}

export default SalesInfo;