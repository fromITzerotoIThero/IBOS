import React from 'react';
import './App.css';
import DomainList from './components/DomainList';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <DomainList></DomainList>
        </div>
    );
}

export default App;