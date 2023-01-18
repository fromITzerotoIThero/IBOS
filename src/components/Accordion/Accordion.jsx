import React from 'react';
import { useState } from 'react';
import styles from './Accordion.module.css'
import AccordionElement from '../AccordionElement/AccordionElement';

function Accordion({ talentName, talentShortDescription }) {

    return (
        <div className={styles.accordion}>
            <AccordionElement
                talentName="Achiever"
                talentShortDescription="People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive."
            />
            <AccordionElement
                talentName="Arranger"
                talentShortDescription="People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity."
            />
            <AccordionElement
                talentName="Belief"
            />
            <AccordionElement
                talentName="Consitency"
            />
            <AccordionElement
                talentName="Deliberative"
            />
            <AccordionElement
                talentName="Responsibility"
            />
            <AccordionElement
                talentName="Restorative"
            />
        </div>
    );

}

export default Accordion;
