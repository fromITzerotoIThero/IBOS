import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './DomainDetails.module.css';

function DomainDetails() {

    const [themes, setThemes] = useState([]);
    const [domains, setDomains] = useState([])

    useEffect(() => {
      async function fetchData() {
        const { data } = await supabase
            .from('Themes')
            .select()
            // .select('name', 'Domains' ('name'))
            .order('domain_id')

        setThemes(data);
        // setDomains(data);
      }
      fetchData();
    }, []);

    return (
        <ul className={styles.list}>
            {/* {domains.map(domain =>
                <li className={styles.element} key={domain.id}>{domain.name}</li>
            )} */}
            {themes.map(theme =>
                <div>
                    <li className={styles.element} key={theme.id}>
                        <div>{theme.name}</div>
                        <div>{theme.id}</div>
                        {/* <div>{theme.description}</div> */}
                    </li>
                </div>
            )}
        </ul>
    );
}

export default DomainDetails;
