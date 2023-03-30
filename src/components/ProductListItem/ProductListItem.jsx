import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProductListItem.module.css';

function ProductListItem({ targetProduct, imgSrc, imgAlt, productName, currentPrice, originalPrice, discountPercentage, isDiscounted }) {

    return (
        <NavLink
            to={targetProduct}
            className={({ isActive }) => isActive ? `${styles.product} ${styles.active}` : `${styles.product}`}
        >
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <img src={imgSrc} alt={imgAlt} className={styles.image} />
                    {isDiscounted &&
                        <div className={styles.discount_band}>{discountPercentage}% off</div>
                    }
                </div>
                <div className={styles.text_container}>
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
                    <div className={styles.product_name} title={productName}>
                        {productName}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default ProductListItem;
