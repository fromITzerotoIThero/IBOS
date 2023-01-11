import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Header() {

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.navbar__entry}><HomeOutlinedIcon className={styles.navbar__icon}/>Welcome</Link>
            <Link to="/domainsoverview" className={styles.navbar__entry}>Domains</Link>
            <Link to="/domainlist" className={styles.navbar__entry}>Domain List</Link>
            <Link to="/dummypage" className={styles.navbar__entry}>DummyPage</Link>
        </div>
    );

}

export default Header;
