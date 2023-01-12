import React from 'react';
import styles from './AccordionElement.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionElement({talentName, talentShortDescription}) {

    return (
        <div className={styles.container}>
            <div className={styles.accordion}>
                <div className={styles.accordion__element}>
                    <div className={styles.title}>{talentName}Achiever<ExpandMoreIcon className={styles.icon} /></div>
                    <div className={styles.content}>{talentShortDescription}People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.</div>
                </div>
                <div className={styles.accordion__element}>
                    <div className={styles.title}>{talentName}Arranger<ExpandMoreIcon className={styles.icon} /></div>
                    <div className={styles.content}>{talentShortDescription}</div>
                </div>
                <div className={styles.accordion__element}>
                    <div className={styles.title}>{talentName}Belief<ExpandMoreIcon className={styles.icon} /></div>
                    <div className={styles.content}>{talentShortDescription}</div>
                </div>
                <div className={styles.accordion__element}>
                    <div className={styles.title}>{talentName}Consistency<ExpandMoreIcon className={styles.icon} /></div>
                    <div className={styles.content}>{talentShortDescription}</div>
                </div>
            </div>
        </div>
    );

}

export default AccordionElement;
