// Styles
import styles from '../../css/components/Flower.module.css';

// Images
import image from '../../images/contacts-background.jpg';

// Dependencies
import React from 'react';

const Flower = () => {
    return (
        <div className={styles['flower']}>
            <img src={image} alt='nome-fiore' />
            <h3>nome fiore</h3>
            <h5>nome scientifico</h5>
        </div>
    );
};
export default Flower;