import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './DomainList.module.css';

function DomainList() {

    const [domains, setDomains] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase.from('Domains').select();
            setDomains(data);
        }
        fetchData();
    }, []);

    return (
        <ul className={styles.list}>
            {domains.map(domain =>
                <li className={styles.element} key={domain.id}>{domain.name}</li>
            )}
        </ul>
    );
}

export default DomainList;
