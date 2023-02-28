import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink } from 'react-router-dom';

function NavBarEntry({ targetName, entryName, icon }) {

    return (
        <NavLink
            to={targetName}
            className={({ isActive }) => isActive ? `${styles.navbar__entry} ${styles.active}` : `${styles.navbar__entry}` }>
            {icon}
            {entryName}
        </NavLink>
    );
}

export default NavBarEntry;
