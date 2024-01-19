import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import DomainDetails from './pages/DomainDetails/DomainDetails';
import ProductPage from './pages/ProductPage/ProductPage';

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
                <Route path="/domainsoverview/domaindetails">
                    <Route path=":id" element={<DomainDetails />} />
                </Route>
                <Route path="/productpage">
                    <Route path=":id" element={<ProductPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
