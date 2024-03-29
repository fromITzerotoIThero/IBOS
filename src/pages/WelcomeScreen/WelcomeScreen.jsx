import React from 'react';
import { useState, useCallback } from 'react';
import BasicCard from '../../components/BasicCard/BasicCard';
import WelcomeScreenText from './WelcomeScreenText';
import ProductList from '../../components/ProductList/ProductList';

function WelcomeScreen() {

    const [visibleWelcomeScreen, setVisibleWelcomeScreen] = useState(
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
                    // description="IBOS (I Build On Strengths) is a fictional online store where you can explore and purchase products related to Gallup StrengthsFinder Themes. The project has been created solely for the purpose of learning different aspects of web development and building a React application with global state management using Redux. Please note that the images and descriptions of the products were AI-generated, so it's advisable to take them with a pinch (a rather big one, I should say) of salt. Gallup Domains & Themes are, on the other hand, a real (and amazing!) deal and feel free to delve into them."
                    description={<WelcomeScreenText />}
                    buttonText="Learn more"
                    buttonLink="/domainsoverview"
                    showCloseButton={true}
                    ariaLabel="Close welcome screen"
                    onClose={handleWelcomeScreenClose}
                />)}
            <ProductList />

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

