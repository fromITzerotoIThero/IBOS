import React from 'react';
import styles from './DomainHeader.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

function DomainHeader({ backwardLink, domainName }) {

    return (
        <div className={styles.title}>
            <Link to={backwardLink}><ChevronLeftIcon className={styles.icon}/></Link>
            {domainName}
        </div>
    )

}

export default DomainHeader;
