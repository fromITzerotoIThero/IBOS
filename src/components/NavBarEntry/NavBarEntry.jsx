import React from 'react';
import styles from './NavBarEntry.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function NavBarEntry({ targetName, entryName, icon }) {

    return (
        <NavLink
            to={targetName}
            className={classNames(styles.navbar__entry, [({ isActive }) => isActive ? styles.active : "" ])}>
            {icon}
            {entryName}
        </NavLink>
    );
}

export default NavBarEntry;
