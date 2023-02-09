import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../services/supabase';
import AccordionElement from '../components/AccordionElement/AccordionElement';
import styles from './DomainDetails.module.css';
import DomainHeader from '../components/DomainHeader/DomainHeader';

function DomainDetails() {

    const { id } = useParams();
    const [domain, setDomain] = useState({ Themes: [] });

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Domains')
                .select('*, Themes(*)')
                .eq('id', `${id}`)

            setDomain(data[0]);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <DomainHeader backwardLink="/domainsoverview" domainName={domain.name} key={domain.id}/>
            <div className={styles.details}>{domain.details}</div>
            <div>
                {domain.Themes.map(theme =>
                    <AccordionElement themeName={theme.name} themeDescription={theme.description} key={theme.id} />
                )}
            </div>
        </div>
    );
}

export default DomainDetails;
