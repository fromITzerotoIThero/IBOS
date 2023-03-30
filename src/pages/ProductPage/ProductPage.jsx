import React from 'react';
import styles from './ProductPage.module.css';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

function ProductPage({ imgSrc, imgAlt, productName, currentPrice, originalPrice, discountPercentage, isDiscounted }) {

    return (
        <div>
            Hello, I'm your product!
            {/* <div className={styles.header}>
                <div className={styles.product_name}>{productName}</div>
                <div>
                    <div className={styles.price_row}>
                        {isDiscounted === true
                            ?
                            <div>
                                ${currentPrice} &nbsp;
                                <span className={styles.before_discount}>${originalPrice}</span>
                            </div>
                            :
                            <div>${originalPrice}</div>
                        }
                    </div>
                    <button>
                        <div className={styles.cart_icon}></div>
                    </button>
                </div>
            </div>
            <ImageCarousel /> */}


        </div>
    )
}

export default ProductPage;
