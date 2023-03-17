import { style } from '@mui/system';
import React from 'react';
import styles from './ProductListItem.module.css';

function ProductListItem({ imgSrc, imgAlt, productName, currentPrice, originalPrice, discountPercentage, isDiscounted }) {

    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img src={imgSrc} alt={imgAlt} className={styles.image} />
                {isDiscounted &&
                    <div className={styles.discount_band}>{discountPercentage}% off</div>
                }
            </div>
            <div className={styles.text_container}>
                <div className={styles.price_row}>
                    {isDiscounted
                        ?
                        <div>
                            {currentPrice}$ &nbsp;
                            <span className={styles.before_discount}>{originalPrice}$</span>
                        </div>
                        :
                        <div>{originalPrice}$</div>
                    }
                </div>
                <div className={styles.product_name}>
                    {productName}
                </div>
            </div>
        </div>
    )
}

export default ProductListItem;
