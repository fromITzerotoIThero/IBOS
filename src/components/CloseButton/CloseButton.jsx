import React from 'react';
import styles from './CloseButton.module.css';
import CloseIcon from '@mui/icons-material/Close';

function CloseButton({ handleClick }) {

    return (
        <button type="button" onClick={handleClick} className={styles.button}>
            <CloseIcon />
        </button>
    );
}

export default CloseButton;
