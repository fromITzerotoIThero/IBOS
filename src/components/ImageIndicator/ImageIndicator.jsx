import React from 'react';
import styles from './ImageIndicator.module.css';
import CircleIcon from '@mui/icons-material/Circle';

function ImageIndicator({ selectedImgIndex, index, onDotClick }) {

    return (
        <div className={styles.img_indicator}>
            <CircleIcon
                className={`${styles.dot} ${selectedImgIndex === index ? styles.selected : ''}`}
                onClick={onDotClick}
            />
        </div>
    );

}

export default ImageIndicator;
