import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink } from 'react-router-dom';

function NavBarEntry({ targetName, entryName, iconName }) {

    return (
        <NavLink
            to={targetName}
            className={styles.navbar__entry}>
                {/* {<{iconName} />} */}
                {iconName}
                {entryName}
        </NavLink>
        );
}

export default NavBarEntry;
