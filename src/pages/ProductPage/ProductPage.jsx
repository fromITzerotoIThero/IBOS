import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import { useSelector, useDispatch } from 'react-redux';
// import { increment } from '../../features/counter/counterSlice';
import { addItem } from '../../features/ShoppingCart/shoppingCartSlice';
import styles from './ProductPage.module.css';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIndicator from '../../features/ShoppingCart/ShoppingCartIndicator';


function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const isDiscounted = false;
    const currentPrice = null;

    // const count = useSelector((state) => state.counter.value)
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
        <>
            {product != null
                ?
                <>
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
                                    onClick={() => dispatch(addItem())}
                                >
                                    <span>Add to cart</span>
                                    <ShoppingCartOutlinedIcon className={styles.cart_icon} />
                                    <ShoppingCartIndicator />
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
                    <div className={styles.img_container}>
                        <ImageCarousel
                            imageArray={product.thumbnail_urls}
                            imageAlt={product.name}
                        />
                    </div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                </>
                :
                <div className={styles.loading}>Loading...</div>
            }
        </>
    )
}

export default ProductPage;
