import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from '@mui/icons-material/List';

function Header() {

    return (
        <div className={styles.header}>
            <NavLink to="/" activeClassName={styles.active} className={styles.navbar__entry}><HomeOutlinedIcon className={styles.navbar__icon} />Welcome</NavLink>
            <NavLink to="/domainsoverview" className={styles.navbar__entry}><ListIcon className={styles.navbar__icon} />Domains</NavLink>
            <NavLink to="/domainlist" className={styles.navbar__entry}>Domain List</NavLink>
        </div>
    );

}

export default Header;
