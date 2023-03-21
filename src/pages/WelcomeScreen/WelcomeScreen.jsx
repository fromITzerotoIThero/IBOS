import React from 'react';
import { useState, useCallback } from 'react';
import styles from './WelcomeScreen.module.css';
import BasicCard from '../../components/BasicCard/BasicCard';
import ProductList from '../../components/ProductList/ProductList';

function WelcomeScreen() {

    const [ visibleWelcomeScreen, setVisibleWelcomeScreen ] = useState(
        localStorage.getItem("visibleWelcomeScreen")
    );

    let showWelcomeScreen = shouldShow(visibleWelcomeScreen);

    const handleWelcomeScreenClose = useCallback(() => {
        localStorage.setItem("visibleWelcomeScreen", "false");
        setVisibleWelcomeScreen("false");
    }, [visibleWelcomeScreen]);


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
            <div className={styles.welcome_products}><ProductList /></div>

        </div>
    );

}

export default WelcomeScreen;


function shouldShow(visibleWelcomeScreen) {
    let result = true;

    //first render before we close it
    if (visibleWelcomeScreen == "true") {
        result = true;
    }

    if (visibleWelcomeScreen == "false") {
        result = false;
    }

    return result;
}


// function WelcomeScreen() {

//     const [ closedWelcomeScreen, setClosedWelcomeScreen ] = useState(
//         localStorage.getItem("closedWelcomeScreen")
//     );

//     let showWelcomeScreen = shouldShow(closedWelcomeScreen);

//     const handleWelcomeScreenClose = () => {
//         localStorage.setItem("closedWelcomeScreen", "true");
//         setClosedWelcomeScreen("true");
//     };


//     return (
//         <div>
//             {showWelcomeScreen && (
//                 <BasicCard
//                     title="Welcome to IBOS"
//                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                     buttonText="Learn more"
//                     buttonLink="/domainsoverview"
//                     showCloseButton={true}
//                     ariaLabel="Close welcome screen"
//                     onClose={handleWelcomeScreenClose}
//                 />)}

//         </div>
//     );

// }

// export default WelcomeScreen;


// function shouldShow(closedWelcomeScreen) {
//     let result = true;

//     //first render before we close it
//     if (closedWelcomeScreen == null) {
//         result = true;
//     }

//     if (closedWelcomeScreen == "true") {
//         result = false;
//     }

//     return result;
// }

