import React from 'react';
import styles from './BasicCard.module.css';

function BasicCard({ title, description, buttonText, buttonLink }) {

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <a href={buttonLink} className={styles.button}>{buttonText}</a>
        </div>
    );

}

export default BasicCard;
