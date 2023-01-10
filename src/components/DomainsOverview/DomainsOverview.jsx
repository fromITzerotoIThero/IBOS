import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import styles from './DomainsOverview.module.css';
import BasicCard from '../BasicCard/BasicCard';

function DomainsOverview({ title, description, buttonText, buttonLink }) {

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
          <li className={styles.element} key={domain.id}>
            <BasicCard title={domain.name} description={domain.short_description} buttonText="Learn more" />
          </li>
        )}
      </ul>
    );
  }

  export default DomainsOverview;

