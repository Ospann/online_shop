'use client'
import Box from '@mui/material/Box'
import Gallery from "./components/Gallery";
import SalesBlock from "./components/SalesBlock";
import ProductDetails from "./components/ProductDetails";
import classes from './product.module.css';
import products from '@/constants/products.json';

function ProductPage({ params }: { params: { id: string } }) {
    const selectedProduct = products.find(p => p.id === Number(params.id));
    
    if (!selectedProduct) {
        return <div>Loading</div>
    }

    return (
        <Box className={classes.page}>
            <Gallery images={selectedProduct.images} />
            <ProductDetails  {...selectedProduct} />
            <SalesBlock {...selectedProduct} />
        </Box>
    );
}

export default ProductPage;
