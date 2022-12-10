import React from 'react';
import styles from './WelcomeScreen.module.css';

function WelcomeScreen() {

    return (
        <section className={styles.welcome_screen}>
            <header>Welcome to IBOS</header>
            <main>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </main>
            <button>Learn more</button>
        </section>
    );

}

export default WelcomeScreen;
