import React from 'react';
import styles from './Accordion.module.css'
import AccordionElement from '../AccordionElement/AccordionElement';

function Accordion() {

    return (
        <div className={styles.accordion}>
            <AccordionElement
                themeName="Achiever"
                themeDescription="People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive."
            />
            <AccordionElement
                themeName="Arranger"
                themeDescription="People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity."
            />
            <AccordionElement
                themeName="Belief"
            />
            <AccordionElement
                themeName="Consitency"
            />
            <AccordionElement
                themeName="Deliberative"
            />
            <AccordionElement
                themeName="Responsibility"
            />
            <AccordionElement
                themeName="Restorative"
            />
        </div>
    );

}

export default Accordion;
