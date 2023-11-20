import React from 'react';
import { useSelector } from 'react-redux';
import { selectItemCount } from './shoppingCartSlice';
import styles from './ShoppingCartIndicator.module.css';

function ShoppingCartIndicator() {
    const itemCount = useSelector(selectItemCount);

    if (itemCount === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            {itemCount}
        </div>
    );
}

export default ShoppingCartIndicator;
