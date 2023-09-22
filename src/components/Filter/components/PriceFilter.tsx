'use client'

import { Slider, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useUrlParams from '@/utils/hooks/useURLParams';
import useProductStort from '@/store/product.store';

const marks = [
    {
        value: 10,
        label: '10',
    },
    {
        value: 1000,
        label: '1000',
    },
];

const PriceFilter = () => {
    const { filterProducts } = useProductStort();
    const [sliderValue, setSliderValue] = useState<number>(1000);
    const { set, getAll } = useUrlParams();
    const { maxPrice, types, suppliers, search } = getAll();

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
        }
    };

    useEffect(() => {
        filterProducts(types, suppliers, maxPrice, search);
    }, [types, suppliers, search, maxPrice, filterProducts])


    const handleSliderChangeCommitted = (_: React.SyntheticEvent | Event, value: number | number[]) => {
        if (typeof value === 'number') {
            set('maxPrice', String(value));
        }
    };

    return (
        <Box>
            <Typography variant="body1">
                Min Order
            </Typography>
            <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                onChangeCommitted={handleSliderChangeCommitted}
                aria-label="Small"
                valueLabelDisplay="auto"
                max={1000}
                marks={marks}
            />
        </Box>
    );
};

export default PriceFilter;
