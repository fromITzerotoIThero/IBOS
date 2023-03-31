import React from 'react';
import styles from './ProductPageTemplate.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

function ProductPageTemplate({ productName, isDiscounted, originalPrice, currentPrice, productDescription, imgArray, imgAlt }) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>
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
                        <span>Add to cart</span>
                        <ShoppingCartOutlinedIcon className={styles.cart_icon}/>
                    </button>
                </div>
            </div>
            <div>
                <ImageCarousel
                    imgArray={imgArray}
                    imgAlt={imgAlt}
                />
            </div>
            <div className={styles.description}>
                {productDescription}
            </div>
        </div>
    )

}

export default ProductPageTemplate;
