import React from 'react';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
// import ImageIndicator from '../ImageIndicator/ImageIndicator';
import { RadioButtonUncheckedOutlined } from '@mui/icons-material';

function ImageCarousel() {

    const imgArray = [
        { url: "https://images.unsplash.com/photo-1677833766807-5598cc321858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
        { url: "https://images.unsplash.com/photo-1684057044985-6cb9a99b4663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
        { url: "https://images.unsplash.com/photo-1684051489159-526760dbb8ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const imgUrl = imgArray[currentIndex].url;

    const isFirstImg = currentIndex === 0;
    const isLastImg = currentIndex === imgArray.length - 1;
    const leftArrow = isFirstImg ? styles.hidden : styles.arrow;
    const rightArrow = isLastImg ? styles.hidden : styles.arrow;

    const prevImg = () => {
        const newIndex = isFirstImg ? imgArray.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextImg = () => {
        const newIndex = isLastImg ? imgArray.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.container}>
            {imgArray != null
                ?
                <div>
                    <img src={imgUrl} className={styles.img} alt={""} />

                    {imgArray.length > 1 && (
                        <div className={styles.arrow_container}>
                            <ChevronLeftIcon className={leftArrow} onClick={prevImg} />
                            <ChevronRightIcon className={rightArrow} onClick={nextImg} />

                            <div className={styles.img_indicator}>
                                {imgArray.map(img => (
                                    <div key={img.url}><RadioButtonUncheckedOutlined /></div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                :
                <CropOriginalRoundedIcon className={styles.img_icon} />
            }
        </div>
    );
}

export default ImageCarousel;
