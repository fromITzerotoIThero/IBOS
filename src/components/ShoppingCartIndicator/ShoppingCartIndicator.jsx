import React from 'react';
import styles from './ShoppingCartIndicator.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function ShoppingCartIndicator({ count }) {

    return (
        <div className={styles.cart_indicator}>
            <ShoppingCartOutlinedIcon className={styles.cart_icon_navbar} />
            <CircleIcon className={styles.circle_icon} />
            <span className={styles.count}>{count}</span>
        </div>
    );

}

export default ShoppingCartIndicator;
