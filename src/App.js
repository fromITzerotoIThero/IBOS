import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import DomainDetails from './pages/DomainDetails/DomainDetails';
import styles from './App.module.css';

import ProductListItem from './components/ProductListItem/ProductListItem';


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
                <Route path="/domainsoverview" element={<DomainsOverview />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/domaindetails">
                    <Route path=":id" element={<DomainDetails />} />
                </Route>
            </Routes>
            <ProductListItem />
        </div>
    );
}

export default App;
