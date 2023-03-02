import React from 'react';
import { useState } from 'react';
import BasicCard from '../../components/BasicCard/BasicCard';

function WelcomeScreen() {

    //this state is string, because it is taken from localStorage
    const myStateArray = useState(
        localStorage.getItem("hasClosedWelcomeScreen")
    );
    const hasClosedWelcomeScreen = myStateArray[0]
    const setClosedWelcomeScreen = myStateArray[1]

    let showWelcomeScreen = shouldIShow(hasClosedWelcomeScreen);

    const handleWelcomeScreenClose = () => {
        localStorage.setItem("hasClosedWelcomeScreen", "true");
        //make sure to set the state as string, because it is for local storage
        setClosedWelcomeScreen("true");
    };

    return (
        <div>
            {showWelcomeScreen && (
            <BasicCard
                title="Welcome to IBOS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                buttonText="Learn more"
                buttonLink="/domainsoverview"
                showCloseButton={true}
                ariaLabel="Close welcome screen"
                onClose={handleWelcomeScreenClose}
            />)}

        </div>
    );

}

export default WelcomeScreen;


// const myStateArray = useState(
//     localStorage.getItem("hasClosedWelcomeScreen")
// );

// let hasClosedWelcomeScreen = myStateArray[0]
// let showWelcomeScreen = true;

// if(hasClosedWelcomeScreen == null) {
//     showWelcomeScreen = true
// }
// if(hasClosedWelcomeScreen == "true") {
//     showWelcomeScreen = false
// }
// const setClosedWelcomeScreen = myStateArray[1]

// const handleWelcomeScreenClose = () => {
//     localStorage.setItem("hasClosedWelcomeScreen", "true");
//     setClosedWelcomeScreen("true");
// };

function shouldIShow(hasClosedWelcomeScreen){
    let result = true;

    //first render before we close it
    if(hasClosedWelcomeScreen == null) {
        result = true
    }

    if(hasClosedWelcomeScreen == "true") {
        result = false
    }

    return result;
}
