import React from 'react';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import ImageIndicator from '../ImageIndicator/ImageIndicator';


function ImageCarousel({ imageArray }) {

    // const imageArray = [
    //     { url: "https://images.unsplash.com/photo-1677833766807-5598cc321858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    //     { url: "https://images.unsplash.com/photo-1684057044985-6cb9a99b4663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    //     { url: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80" },
    //     { url: "https://images.unsplash.com/photo-1553774521-44a3b4c5fbbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" },
    //     { url: "https://images.unsplash.com/photo-1684051489159-526760dbb8ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    // ];

    const [currentIndex, setCurrentIndex] = useState(0);

    if (imageArray === null || imageArray.length === 0) {
        return;
    }

    const imageUrl = imageArray[currentIndex].url;

    const isFirstImage = currentIndex === 0;
    const isLastImage = currentIndex === imageArray.length - 1;
    const leftArrow = isFirstImage ? styles.hidden : styles.arrow;
    const rightArrow = isLastImage ? styles.hidden : styles.arrow;

    const previousImage = () => {
        const newIndex = isFirstImage ? 0 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = isLastImage ? imageArray.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToImage = (imageIndex) => {
        const newIndex = imageIndex;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.container}>
            {imageArray != null
                ?
                <div>
                    <img src={imageUrl} className={styles.image} alt={""} />

                    {imageArray.length > 1 && (
                        <div className={styles.arrow_container}>
                            <ChevronLeftIcon className={leftArrow} onClick={previousImage} />
                            <ChevronRightIcon className={rightArrow} onClick={nextImage} />

                            <div className={styles.indicator}>
                                {imageArray.map((image, imageIndex) => (
                                    <ImageIndicator
                                        key={image.url}
                                        isActive={imageIndex === currentIndex}
                                        onDotClick={() => goToImage(imageIndex)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                :
                <CropOriginalRoundedIcon className={styles.image_icon} />
            }
        </div>
    );
}

export default ImageCarousel;

