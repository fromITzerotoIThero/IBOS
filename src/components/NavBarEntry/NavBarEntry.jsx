import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function NavBarEntry({ targetName, entryName, icon, matchingPath }) {

    const { pathname } = useLocation();
    const modifiedPathname = pathname.slice(0, 7);
    const isActive = matchingPath.includes(modifiedPathname);

    return (
        <NavLink
            to={targetName}
            className={isActive ? `${styles.navbar__entry} ${styles.active}` : `${styles.navbar__entry}`}>
            {icon}
            {entryName}
        </NavLink>
    );
}

export default NavBarEntry;
