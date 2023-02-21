import React from 'react';
import styles from './Header.module.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from '@mui/icons-material/List';
import NavBarEntry from '../NavBarEntry/NavBarEntry';

function Header() {

    return (
        <div className={styles.header}>
            <NavBarEntry
                targetName="/"
                icon={<HomeOutlinedIcon />}
                entryName="Welcome"
            />

            <NavBarEntry
                targetName="/domainsoverview"
                icon={<ListIcon />}
                entryName="Domains"
            />

            <NavBarEntry
                targetName="/domainlist"
                icon={<ListIcon />}
                entryName="Domain List"
            />
        </div>
    );

}

export default Header;
