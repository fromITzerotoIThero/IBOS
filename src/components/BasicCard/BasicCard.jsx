import React from 'react';
import styles from './BasicCard.module.css';

function BasicCard() {

    return (
        <div className={styles.card}>
            <div className={styles.title}>Title</div>
            <div className={styles.body}>Description</div>
            <a href="#" className={styles.button}>Button text</a>
        </div>
    );

}

export default BasicCard;
