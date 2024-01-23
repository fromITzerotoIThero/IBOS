import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink, useLocation } from 'react-router-dom';

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

function comparePathNamePrefixes(pathname, prefix) {
    const pathNameSegments = pathname.split('/');
    console.log(pathNameSegments);
    const prefixSegments = prefix.split('/');
    console.log(prefixSegments);

    return prefixSegments.every((prefixSegment, index) => prefixSegment === pathNameSegments[index]);
}

export default NavBarEntry;
