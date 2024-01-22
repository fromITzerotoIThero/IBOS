import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import BasicCard from '../BasicCard/BasicCard';
import styles from './DomainsOverview.module.css';

function DomainsOverview() {

    const [domains, setDomains] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Domains')
                .select();
            setDomains(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {domains.map(domain =>
                <div className={styles[modifyName(domain.name)]}>
                    <BasicCard
                        title={domain.name}
                        description={domain.short_description}
                        buttonText="Learn more"
                        buttonLink={`/domaindetails/${domain.id}`}
                        key={domain.id} />
                </div>

            )}
        </div>
    );
}

export default DomainsOverview;

function modifyName(string) {
    const name = string;
    return name.toLowerCase().replace(' ', '-');
}
