import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import DomainDetails from './pages/DomainDetails/DomainDetails';

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
            <ProductListItem
                imgSrc="../../../../../../Pulpit/BOYS/Chopaki/my-favorite.png"
                imgAlt="My favorite CHOPAKI boy"
                productName="Product that has a veeeeeeeeeeeeeeeeeeeery long description"
                currentPrice="12.99"
                originalPrice="12.99"
                discountPercentage="0"
                isDiscounted={false}
            />
            <ProductListItem
                imgSrc="../../../../../../Pulpit/BOYS/Chopaki/my-favorite.png"
                imgAlt="My favorite CHOPAKI boy"
                productName="Different product name that is too long and if it does overflow"
                currentPrice="8.99"
                originalPrice="8.99"
                discountPercentage="0"
                isDiscounted={false}
            />
            <ProductListItem
                imgSrc="./images/my-favorite.png"
                imgAlt="My favorite CHOPAKI boy"
                productName="Discounted product name"
                currentPrice="8.99"
                originalPrice="14.99"
                discountPercentage="40"
                isDiscounted={true}
            />
        </div>
    );
}

export default App;
