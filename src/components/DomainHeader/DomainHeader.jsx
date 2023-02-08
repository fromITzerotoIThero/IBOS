import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './DomainHeader.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

function DomainHeader() {

    const [domainName, setDomainName] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Domains')
                .select('name')
                .eq('id', 'id')

            setDomainName(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {domainName.map(domainName =>
                <div className={styles.title} domainName={domainName.name} key={domainName.id}><Link to="/domainsoverview"><ChevronLeftIcon className={styles.icon}/></Link>{domainName.name}</div>
            )}
        </div>
    )
}

export default DomainHeader;
