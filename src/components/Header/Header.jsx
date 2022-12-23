import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.navbar__entry}>Welcome</Link>
            <Link to="/DomainList" className={styles.navbar__entry}>Domains</Link>
            <Link to="/DummyPage" className={styles.navbar__entry}>DummyPage</Link>
        </div>
    );

}

export default Header;
