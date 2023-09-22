'use client'
import { Box, Typography } from "@mui/material";
import classes from './footer.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <>
            <Box className={classes.footer}>
                <Box className={classes.footerBlock}>
                    <Typography variant="h6" >Online-Shop</Typography>
                    <p>Payment</p>
                    <p>Delivery</p>
                    <p>Crediets</p>
                    <p>Promotions</p>
                    <p>Helpful links</p>
                    <p>Sertifications</p>
                    <p>Warranty</p>
                </Box>
                <Box className={classes.footerBlock}>
                    <Typography variant="h6">Help</Typography>
                    <p>How to order</p>
                    <p>Bonus programm</p>
                    <p>{`Order's status`}</p>
                    <p>Forum</p>
                    <p>FAQ</p>
                </Box>
                <Box className={classes.footerBlock}>
                    <Typography variant="h6">Company</Typography>
                    <p>About Us</p>
                    <p>Reviews</p>
                    <p>Secvices</p>
                    <p>Vacancies</p>
                    <p>News</p>
                    <p></p>
                </Box>
                <Box className={classes.footerBlock}>
                    <Typography variant="h6">Contacts</Typography>
                    <p>Address: </p>
                    <p>Email: example@example.com</p>
                    <p>Phone: +7 (123) 456-7890</p>
                    <Typography variant="h6">{`Let's be friend in social media`}</Typography>
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <YouTubeIcon />
                    <PinterestIcon />
                </Box>
            </Box>
            <Box className={classes.lowBlock}>
                <Typography>Powered by Maxinum Consulting</Typography>
            </Box>
        </>
    )
}

export default Footer;
