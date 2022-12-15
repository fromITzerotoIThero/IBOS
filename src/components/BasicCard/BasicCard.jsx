import React from 'react';
import styles from './BasicCard.module.css';

function BasicCard() {

    return (
        <div className={styles.basic_card}>
            <div className={styles.title}>Title</div>
            <div className={styles.body}>Description</div>
            <a href="#"><button className={styles.button} >Button text</button></a>
        </div>
    );

}

export default BasicCard;
