import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import styles from './ProductList.module.css';
import ProductListItem from '../ProductListItem/ProductListItem';


function ProductList() {

    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const productsPerPage = 10;

    useEffect(() => {
        async function fetchData() {
            const pageParam = new URLSearchParams(location.search).get('page');
            const page = pageParam ? parseInt(pageParam, 10) : 1;
            const { data, count } = await supabase
                .from('Products')
                .select('*', { count: 'exact' })
                .range((currentPage - 1) * productsPerPage, currentPage * productsPerPage - 1)
            setCount(count);
            setProducts(data);
            setCurrentPage(page);
        }
        fetchData();

    }, [currentPage, location.search]);

    const handlePageChange = (newPage) => {
        const query = new URLSearchParams(location.search);
        query.set('page', newPage);
        // history.pushState(`${location.pathname}?${query.toString()}`);
        // setCurrentPage(newPage)
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
            <div className={styles.pagination_buttons}>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= count / productsPerPage}>Next</button>
            </div>
        </>
    );
}

export default ProductList;
