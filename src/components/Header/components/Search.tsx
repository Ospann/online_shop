'use client'

import { InputBase, Button, Box } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect } from 'react';
import useURLParams from '@/utils/hooks/useURLParams';
import useProductStort from '@/store/product.store';
import classes from '../header.module.css';

const Search = () => {
    const { filterProducts } = useProductStort()
    const [searchText, setSearchText] = useState("")
    const { set, getAll } = useURLParams();

    const { maxPrice, types, suppliers, search } = getAll();

    const onHandleSearch = () => {
        set("search", searchText);
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        filterProducts(types, suppliers, maxPrice, search);
    }, [types, suppliers, search, maxPrice, filterProducts])


    return (
        <Box className={classes.Search}>
            <InputBase value={searchText}
                onChange={handleSearchInputChange}
                placeholder="Search..." sx={{
                    paddingLeft: '2rem',
                    width: '60%'
                }} />
            <Button
                onClick={onHandleSearch}
                startIcon={<SearchOutlinedIcon />}
                sx={{ borderRadius: '40px' }}
                variant='contained'
                color='warning'
            >
                Search
            </Button>
        </Box>
    )
}


export default Search;