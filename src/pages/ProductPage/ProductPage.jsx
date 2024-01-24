import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { supabase } from '../../services/supabase';
import { addItem } from '../../app/shoppingCartSlice';
import styles from './ProductPage.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';


function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    const isDiscounted = false;
    const currentPrice = null;

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Products')
                .select('*')
                .eq('id', `${id}`)

            setProduct(data[0]);
        }
        fetchData();
    }, [id]);


    return (
        <>
            {product != null
                ?
                <>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.name}>
                                {product.name}
                            </div>
                            <div className={styles.price_and_cart_button}>
                                <div className={styles.price_row}>
                                    {isDiscounted === true
                                        ?
                                        <div>
                                            ${currentPrice}
                                            <span className={styles.before_discount}>${product.price}</span>
                                        </div>
                                        :
                                        <div>${product.price}</div>
                                    }
                                </div>
                                <button
                                    className={styles.cart_btn}
                                    onClick={() => dispatch(addItem())}
                                >
                                    <span>Add to cart</span>
                                    <ShoppingCartOutlinedIcon className={styles.cart_icon} />
                                </button>
                            </div>
                        </div>
                        <ImageCarousel
                            imageArray={product.thumbnail_urls}
                            imageAlt={product.name}
                        />
                        <div className={styles.description}>
                            {product.description}
                        </div>
                    </div>
                </>
                :
                <div className={styles.loading}>Loading...</div>
            }
        </>
    )
}

export default ProductPage;
