import React from 'react';
import styles from './BasicCard.module.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

type BasicCardProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    showCloseButton: boolean;
    onClose: () => boolean;
    ariaLabel: string;
};

function BasicCard( props : BasicCardProps ) {

    const { title, description, buttonText, buttonLink, showCloseButton, onClose, ariaLabel } = props;

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.button_container}>
                <Link to={buttonLink} className={styles.button}>{buttonText}</Link>
            </div>
            {showCloseButton && (
                <button type="button" onClick={onClose} aria-label={ariaLabel} className={styles.close_button}>
                    <CloseIcon />
                </button>
            )}
        </div>
    );
}

export default BasicCard;
