import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink } from 'react-router-dom';

function NavBarEntry({ targetName, entryName, icon }) {

    return (
        <NavLink
            to={targetName}
            className={styles.navbar__entry}>
                {icon}
                {entryName}
        </NavLink>
        );
}

export default NavBarEntry;
