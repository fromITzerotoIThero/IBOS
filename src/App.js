import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import BasicCard from './components/BasicCard/BasicCard';
import { Route, Routes } from 'react-router-dom';
import { DummyPage } from './components/DummyPage/DummyPage';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/dummypage" element={<DummyPage />} />
                <Route path="/domains" element={<DomainList />} />
            </Routes>
        </div>
    );
}

export default App;
