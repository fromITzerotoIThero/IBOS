import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import { Route, Routes } from 'react-router-dom';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import Accordion from './components/Accordion/Accordion';
import DomainDetails from './pages/DomainDetails/DomainDetails';

function App() {

    const [showWelcomeScreen, setShowWelcomeScreen] = useState(
        !localStorage.getItem("hasClosedWelcomeScreen")
    );

    const handleWelcomeScreenClose = () => {
        localStorage.setItem("hasClosedWelcomeScreen", true);
        setShowWelcomeScreen(false);
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element=

                    {showWelcomeScreen && (
                        <WelcomeScreen
                            onClose={handleWelcomeScreenClose}
                        />
                    )}
                />
                <Route path="/domainsoverview" element={<DomainsOverview />}>
                    <Route path="domiansoverview/domaindetails">
                        <Route path=":id" element={<DomainDetails />} />
                    </Route>
                </Route>
                <Route path="/domainlist" element={<DomainList />} />
                <Route path="/accordion" element={<Accordion />} />

            </Routes>
        </div>
    );
}

export default App;
