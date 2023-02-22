import React from 'react';
import styles from './DomainHeader.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

function DomainHeader({ backwardLink, domainName, theme_color }) {

    return (
        <div className={styles[theme_color]}>
            <div className={styles.title}>
                <Link to={backwardLink}><ChevronLeftIcon className={styles.icon}/></Link>
                {domainName}
            </div>
        </div>
    )

}

export default DomainHeader;
