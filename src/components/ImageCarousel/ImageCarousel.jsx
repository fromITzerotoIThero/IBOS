import React from 'react';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import ImageIndicator from '../ImageIndicator/ImageIndicator';


function ImageCarousel({ imageArray, imageAlt }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    if (imageArray == null || imageArray.length === 0) {
        return;
    }

    const imageUrl = imageArray[currentIndex];

    const isFirstImage = currentIndex === 0;
    const isLastImage = currentIndex === imageArray.length - 1;
    const leftArrowClassName = isFirstImage ? styles.hidden : styles.arrow;
    const rightArrowClassName = isLastImage ? styles.hidden : styles.arrow;

    const goToPreviousImage = () => {
        const newIndex = isFirstImage ? 0 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextImage = () => {
        const newIndex = isLastImage ? imageArray.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div className={styles.container}>
            {imageArray != null
                ?
                <>
                    <img src={imageUrl} className={styles.image} alt={imageAlt} />

                    {imageArray.length > 1 && (
                        <>
                            <div className={styles.arrow_container}>
                                <ChevronLeftIcon className={leftArrowClassName} onClick={goToPreviousImage} />
                                <ChevronRightIcon className={rightArrowClassName} onClick={goToNextImage} />
                            </div>

                            <div className={styles.indicator}>
                                {imageArray.map((image, imageIndex) => (
                                    <ImageIndicator
                                        key={image}
                                        isActive={imageIndex === currentIndex}
                                        onDotClick={() => setCurrentIndex(imageIndex)}
                                    />
                                ))}
                            </div>
                        </>

                    )}
                </>
                :
                <CropOriginalRoundedIcon className={styles.image_icon} />
            }
        </div>
    );
}

export default ImageCarousel;

