import React, { useState } from 'react';
import styles from './AccordionElement.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionElement({ talentName, talentShortDescription }) {

    const [expanded, setExpanded] = useState(false);
    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={styles.accordion__element}>
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



// function AccordionElement({talentName, talentShortDescription}) {

//     return (
//         <div className={styles.container}>
//             <div className={styles.accordion}>
//                 <div className={styles.accordion__element}>
//                     <div className={styles.title}>{talentName}Achiever<ExpandMoreIcon className={styles.icon} /></div>
//                     <div className={styles.content}>{talentShortDescription}People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.</div>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default AccordionElement;
