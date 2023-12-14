import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './ProductList.module.css';
import ProductListItem from '../ProductListItem/ProductListItem';


function ProductList() {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Products')
                .select()
                .range((currentPage - 1) * productsPerPage, currentPage * productsPerPage - 1);
            setProducts(data);
        }
        fetchData();

    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    };

    return (
        <>
            <div className={styles.container}>
                {products.map(product =>
                    <div key={product.id}>
                        <ProductListItem
                            targetProduct={`/productpage/${product.id}`}
                            imgSrc={product.thumbnail_urls}
                            productName={product.name}
                            originalPrice={product.price}
                        />
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </>
    );
}

export default ProductList;
