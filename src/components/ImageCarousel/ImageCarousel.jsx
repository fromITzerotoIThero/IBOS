import React from 'react';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import ImageIndicator from '../ImageIndicator/ImageIndicator';

function ImageCarousel({ imgArray, imgAlt }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imgUrl = imgArray[currentIndex];

    const prevImg = () => {
        const isFirstImg = currentIndex === 0;
        const newIndex = isFirstImg ? imgArray.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextImg = () => {
        const isLastImg = currentIndex === imgArray.length - 1;
        const newIndex = isLastImg ? imgArray.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.container}>
            {imgArray != null
                ?
                <div>
                    <img src={imgUrl} alt={imgAlt} className={styles.img} />
                    <div>
                        <ChevronLeftIcon onClick={prevImg} />
                    </div>
                    <div>
                        <ChevronRightIcon onClick={nextImg} />
                    </div>
                    <div>
                        {imgArray.map((img, imgIndex) => (
                            <ImageIndicator />
                        ))}
                    </div>
                </div>
                :
                <CropOriginalRoundedIcon className={styles.img_icon} />
            }
        </div>
    );
}


export default ImageCarousel;
