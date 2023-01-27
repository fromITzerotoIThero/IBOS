import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import BasicCard from './components/BasicCard/BasicCard';
import { Route, Routes } from 'react-router-dom';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import Accordion from './components/Accordion/Accordion';
import AccordionElement from './components/AccordionElement/AccordionElement';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/domainsoverview" element={<DomainsOverview />} />
                <Route path="/domainlist" element={<DomainList />} />
                <Route path="/accordion" element={<Accordion />} />
            </Routes>
            <Accordion />
        </div>
    );
}

export default App;
