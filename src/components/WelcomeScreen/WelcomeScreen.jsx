import React from 'react';
import BasicCard from '../BasicCard/BasicCard';

function WelcomeScreen({ title, description, buttonText, buttonLink }) {

    return (
        <div>

            <BasicCard
                title={title}
                description={description}
                buttonText={buttonText}
                buttonLink={buttonLink}
            />

        </div>
    );

}

export default WelcomeScreen;
