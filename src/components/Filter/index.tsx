'use client'

import React, { useEffect, useState } from 'react';

const Filter = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [FilterComponent, setFilterComponent] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.screen.width < 766);
        }

        if (isMobile) {
            import('./components/MobileFilter').then((module) => {
                setFilterComponent(() => module.default);
            });
        } else {
            import('./components/DeskTopFilter').then((module) => {
                setFilterComponent(() => module.default);
            });
        }
    }, [isMobile]);

    return (
        <div>
            {FilterComponent && <FilterComponent />}
        </div>
    );
};

export default Filter;
