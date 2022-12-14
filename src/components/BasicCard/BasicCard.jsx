import React from 'react';
import styles from './BasicCard.module.css';
import { Link } from 'react-router-dom';

function BasicCard({ title, description, buttonText, buttonLink }) {

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.button_container}>
                <Link to={buttonLink} className={styles.button}>{buttonText}</Link>
            </div>
        </div>
    );

}

export default BasicCard;
