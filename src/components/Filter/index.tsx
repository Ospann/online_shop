'use client'

import React, { useEffect, useState } from 'react';
import MobileFilter from './components/MobileFilter';
import DeskTopFilter from './components/DeskTopFilter';

const Filter = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.screen.width < 766);
        }

    }, [isMobile]);
    

    return (
        <div>
            {isMobile ? <MobileFilter />:<DeskTopFilter />}
        </div>
    );
};

export default Filter;
