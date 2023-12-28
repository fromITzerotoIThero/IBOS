import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DomainHeader.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function DomainHeader({ backwardLink, domainName }) {

    return (
        <div className={styles.title}>
            <Link to={backwardLink}><ChevronLeftIcon className={styles.icon} /></Link>
            <div>
                {domainName}
            </div>
        </div>

    )

}

export default DomainHeader;
