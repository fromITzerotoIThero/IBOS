import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './DomainDetails.module.css';
import AccordionElement from '../AccordionElement/AccordionElement';

function DomainDetails() {

    const [domain, setDomain] = useState({ Themes: [] });

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Domains')
                .select('*, Themes(*)')
                .eq('id', '70a7d207-499f-4973-bb29-458af6f3a1f9')

            setDomain(data[0]);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>{domain.name}</div>
            <div className={styles.details}>{domain.details}</div>
            {domain.Themes.map(theme =>
                <AccordionElement themeName={theme.name} themeDescription={theme.description} key={theme.id} />
            )}
        </div>
    );
}

export default DomainDetails;
