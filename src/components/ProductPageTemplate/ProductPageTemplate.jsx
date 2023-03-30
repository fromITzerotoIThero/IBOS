import React from 'react';
import styles from './ProductPageTemplate.module.css';

function ProductPageTemplate({ productName, isDiscounted, originalPrice, currentPrice, productDescription }) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div classname={styles.name}>
                    {productName}
                </div>
                <div>
                    <div className={styles.price_row}>
                        {isDiscounted === true
                            ?
                            <div>
                                ${currentPrice}
                                <span className={styles.before_discount}>${originalPrice}</span>
                            </div>
                            :
                            <div>${originalPrice}</div>
                        }
                    </div>
                    <button className={styles.cart_btn}>
                        Add to cart
                    </button>
                </div>
            </div>
            <div>
                {/* <ImageCarousel /> */}
            </div>
            <div className={styles.description}>
                {productDescription}
            </div>
        </div>
    )

}

export default ProductPageTemplate;
