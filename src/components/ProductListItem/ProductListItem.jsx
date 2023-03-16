import React from 'react';
import styles from './ProductListItem.module.css';

function ProductListItem({ imgSrc, imgAlt, productName, currentPrice, originalPrice, discountPercentage, isDiscounted }) {

    return (
        <div className={styles.container}>
            {/* <img src={imgSrc} alt={imgAlt} className={styles.image} /> */}
            <img
                src="C:\Users\T430\OneDrive\Pulpit\BOYS\Chopaki"
                alt=""
                className={styles.image}
            />
            <div className={styles.text_container}>
                <div className={styles.price_row}>
                    $12.99
                    {currentPrice}
                    {isDiscounted && (
                        <span className={styles.original_price}>{originalPrice}</span>
                    )}

                </div>
                <div className={styles.product_name}>
                    Product name that's oh so veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery looooooooooooooooooooong!
                    {productName}
                </div>
            </div>
        </div>
    )
}

export default ProductListItem;
