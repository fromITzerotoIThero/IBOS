import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import BasicCard from './components/BasicCard/BasicCard';

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <Header />
            </div>
            <div>
                <WelcomeScreen
                    title="Welcome to IBOS"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    buttonText="Learn more"
                    buttonLink=""
                />

                <BasicCard
                    title=""
                    description=""
                    buttonText=""
                    buttonLink=""
                />
            </div>
            <DomainList />

        </div>
    );
}

export default App;
