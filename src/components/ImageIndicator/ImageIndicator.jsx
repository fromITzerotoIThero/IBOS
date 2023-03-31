import React from 'react';
import styles from './ImageIndicator.module.css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';

function ImageIndicator() {

    return (
        <div>
            <CircleIcon className={styles.icon}/>
        </div>
    );

}

export default ImageIndicator;
