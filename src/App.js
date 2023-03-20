import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import DomainsOverview from './components/DomainsOverview/DomainsOverview';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import DomainDetails from './pages/DomainDetails/DomainDetails';
import ProductListItem from './components/ProductListItem/ProductListItem';
import kitty from './images/hello-kitty.jpg';
import boy1 from './images/my-favorite.png';
import boy2 from './images/such-a-pretty-one.png';


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
                imgSrc={boy1}
                imgAlt="My favorite CHOPAKI boy"
                productName="Product that has a very long description that can span multiple lines"
                currentPrice="12.99"
                originalPrice="12.99"
                discountPercentage="0"
                isDiscounted={false}
            />
            <ProductListItem
                imgSrc={boy2}
                imgAlt="My favorite CHOPAKI boy"
                productName="Different product name that is too long and if it does overflow"
                currentPrice="4.99"
                originalPrice="9.99"
                discountPercentage="50"
                isDiscounted={true}
            />
            <ProductListItem
                imgSrc={kitty}
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
