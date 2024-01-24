import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { comparePathNamePrefixes } from '../../utils/pathUtils';

function NavBarEntry({ targetName, entryName, icon, matchingPrefixes }) {

    const { pathname } = useLocation();
    const isActive = matchingPrefixes?.some(prefix => comparePathNamePrefixes(pathname, prefix)) || targetName === pathname;

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
