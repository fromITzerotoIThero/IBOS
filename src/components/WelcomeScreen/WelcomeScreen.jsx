import React from 'react';
import BasicCard from '../BasicCard/BasicCard';
import { Link } from 'react-router-dom';

function WelcomeScreen({ title, description, buttonText, buttonLink }) {

    return (
        <div>
            <BasicCard
                title="Welcome to IBOS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                buttonText="Learn more"
                buttonLink="/DummyPage"
            />
        </div>
    );

}

export default WelcomeScreen;
