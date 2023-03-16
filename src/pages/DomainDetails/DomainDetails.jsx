import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import styles from './DomainDetails.module.css';
import DomainHeader from '../../components/DomainHeader/DomainHeader';

function DomainDetails() {

    const { id } = useParams();
    const [domain, setDomain] = useState(null);

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
        <div>
            {domain != null ?
                <div className={styles.container}>
                    <div className={styles[modifyName(domain.name)]}>
                        <DomainHeader backwardLink="/domainsoverview" domainName={domain.name} key={domain.id} />
                    </div>
                    <div className={styles.details}>{domain.details}</div>
                    <div>
                        {domain.Themes.map(theme =>
                            // <div className={styles[domain.name.toLowerCase().replace(' ', '-')]} key={theme.id} >
                            <div className={styles[modifyName(domain.name)]} key={theme.id} >
                                <AccordionElement themeName={theme.name} themeDescription={theme.description} />
                            </div>
                        )}
                    </div>
                </div>

                : <div>Loading...</div>
            }
        </div>
    );

}

export default DomainDetails;

function modifyName(string) {
    const name = string;
    return name.toLowerCase().replace(' ', '-');
}
