import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
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
      <div>
        {domains.map(domain =>
            <BasicCard title={domain.name} description={domain.short_description} buttonText="Learn more" buttonLink="/accordion"/>
        )}
      </div>
    );
  }

  export default DomainsOverview;

