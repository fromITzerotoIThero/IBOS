import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import ProductPageTemplate from '../../components/ProductPageTemplate/ProductPageTemplate';
import styles from './ProductPage.module.css';

function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Products')
                .select('*')
                .eq('id', `${id}`)

            setProduct(data[0]);
        }
        fetchData();
    }, []);


    return (
        <div>
            {product != null
                ?
                <ProductPageTemplate
                    productName={product.name}
                    originalPrice={product.price}
                    productDescription={product.description}
                    imgArray={product.thumbnail_urls}
                    imgAlt={product.name}
                />
                :
                <div className={styles.loading}>Loading...</div>
            }
        </div>
    )
}

export default ProductPage;
