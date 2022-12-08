import React from 'react';
import styles from './Header.module.css';

function Header() {

    return (
        <section className={styles.header}>
            <a href="#" className={styles.navbar__entry}>Welcome</a>
            <a href="#" className={styles.navbar__entry}>Domains</a>
        </section>
    );

}

export default Header;
