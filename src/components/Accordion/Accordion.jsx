import React from 'react';
import { useState } from 'react';

function Accordion(props) {
    const [setExpanded, setExpandedState] = useState("");

    function toggleAccordion() {
        setExpandedState(setExpanded === "" ? "expanded" : "");
    }

    return (

    );

}

export default Accordion;
