import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import BasicCard from './components/BasicCard/BasicCard';
import { Route, Routes } from 'react-router-dom';
import { DummyPage } from './pages/DummyPage/DummyPage';
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
                <Route path="/dummypage" element={<DummyPage />} />
            </Routes>
            <Accordion />
            <AccordionElement />
        </div>
    );
}

export default App;
