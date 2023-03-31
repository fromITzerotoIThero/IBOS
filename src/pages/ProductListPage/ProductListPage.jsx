import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProductListPage.module.css';
import ProductList from '../../components/ProductList/ProductList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';

function ProductListPage({ pages, targetBackwards, targetForwards }) {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {}, []);

    return (
        <div>
            <ProductList />
            <div className={styles.pages_navigation}>

                <NavLink
                    className={styles.icons}
                    to={targetBackwards}
                >
                    <ArrowBackIosNewIcon />
                </NavLink>


                <NavLink
                    className={styles.icons}
                    to={targetForwards}
                >
                    <ArrowForwardIosNewIcon />
                </NavLink>

            </div>
        </div>

    )

}

export default ProductListPage;
