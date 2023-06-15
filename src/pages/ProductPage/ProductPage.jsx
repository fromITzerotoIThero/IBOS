import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../features/counter/counterSlice';
import styles from './ProductPage.module.css';
import ShoppingCartIndicator from '../../components/ShoppingCartIndicator/ShoppingCartIndicator';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const isDiscounted = false;
    const currentPrice = null;

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

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
        <div>
            {product != null
                ?
                <>
                    <ShoppingCartIndicator
                        count={count}
                    />
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.name}>
                                {product.name}
                            </div>
                            <div>
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
                                    onClick={() => dispatch(increment())}
                                >
                                    <span>Add to cart</span>
                                    <ShoppingCartOutlinedIcon className={styles.cart_icon} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.img_container}>
                            <img src={product.thumbnail_urls[0]} alt={product.name} />
                        </div>
                        <div className={styles.description}>
                            {product.description}
                        </div>
                    </div>
                </>
                :
                <div className={styles.loading}>Loading...</div>
            }
        </div>
    )
}

export default ProductPage;
