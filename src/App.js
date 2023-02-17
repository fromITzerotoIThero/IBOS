import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import { Route, Routes } from 'react-router-dom';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import Accordion from './components/Accordion/Accordion';
import DomainDetails from './pages/DomainDetails/DomainDetails';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/domainsoverview" element={<DomainsOverview />} />
                <Route path="/domainlist" element={<DomainList />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/domaindetails">
                    <Route path=":id" element={<DomainDetails />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
