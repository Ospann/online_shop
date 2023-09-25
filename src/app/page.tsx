'use client'
import Filter from "@/components/Filter";
import { Box, Typography } from "@mui/material";
import Card from '@/components/Card';
import useProductStort from "@/store/product.store";
import classes from './home.module.css';

const Home = () => {
  const { filteredProducts } = useProductStort();

  return (
    <Box className={classes.page}>
      <Filter />
      <Box>
        <Box padding="1rem 0">
          <Typography variant="h5">
            Result : {filteredProducts.length} items
          </Typography>
        </Box>
        <Box className={classes.productsContainer}>
          {filteredProducts.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home;