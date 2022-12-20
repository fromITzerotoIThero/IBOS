import React from 'react';
import styles from './WelcomeScreen.module.css';

function WelcomeScreen({ title, description, buttonText, buttonLink }) {

    return (
        <div className={styles.welcome_screen}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                {description}
            </div>
            <a href={buttonLink} className={styles.button}>{buttonText}</a>
        </div>
    );

}

export default WelcomeScreen;
