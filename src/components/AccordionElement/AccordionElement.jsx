import React, { useState } from 'react';
import styles from './AccordionElement.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classNames from 'classnames';

function AccordionElement({ themeName, themeDescription }) {

    const [expanded, setExpanded] = useState(false);
    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classNames(styles.collapsed, { [styles.expanded]: expanded })}>
            <div className={styles.title} onClick={toggleAccordion}>
                <div className={styles.title__text}>{themeName}</div>
                <div className={styles.icon}>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
            </div>
            <div className={classNames({ [styles.content]: expanded }, { [styles.content__collapsed]: !expanded })}>
                {themeDescription}
            </div>
        </div>
    );

}

export default AccordionElement;
