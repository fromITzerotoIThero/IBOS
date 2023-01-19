import React, { useState } from 'react';
import styles from './AccordionElement.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionElement({ talentName, talentShortDescription }) {

    const [expanded, setExpanded] = useState(false);
    const toggleAccordion = () => {
        setExpanded((expanded) => !expanded);
    };

    return (
        <div className={expanded ? styles.accordion__element__expanded : styles.accordion__element}>
            <div className={styles.title} onClick={toggleAccordion}>
                <div className={styles.title__text}>{talentName}</div>
                <div class name={styles.icon}>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon/>}</div>
            </div>
            {expanded && (
                <div className={styles.content}>
                {talentShortDescription}
                </div>
            )}
        </div>
    );

}

export default AccordionElement;
