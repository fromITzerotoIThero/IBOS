import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from '@mui/icons-material/List';
import NavBarEntry from '../NavBarEntry/NavBarEntry';

function Header() {

    return (
        <div className={styles.header}>
            <NavBarEntry
                to="/"
                iconName=""
                entryName="Welcome"
            />

            <NavBarEntry
                to="domainsoverview"
                iconName=""
                entryName="Domains"
            />

            <NavBarEntry
                to="/domainlist"
                iconName=""
                entryName="Domain List"
            />
        </div>
    );

}

export default Header;
