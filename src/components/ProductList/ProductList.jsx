import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import ProductListItem from '../ProductListItem/ProductListItem';


function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Products')
                .select();
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <ProductListItem
                        imgSrc={product.thumbnail_urls}
                        productName={product.name}
                        originalPrice={product.price}
                    />
                </div>
            )}
        </div>
    );
}

export default ProductList;

function modifyName(string) {
    const name = string;
    return name.toLowerCase().replace(' ', '-');
}
