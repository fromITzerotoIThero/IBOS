import React from 'react';
import styles from './ImageIndicator.module.css';
import CircleIcon from '@mui/icons-material/Circle';

function ImageIndicator({ isActive, onDotClick }) {

    return (
        <div className={styles.indicator}>
            <CircleIcon
                className={`${styles.dot} ${isActive ? styles.selected : ''}`}
                onClick={onDotClick}
            />
        </div>
    );

}

export default ImageIndicator;
