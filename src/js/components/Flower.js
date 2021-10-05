// Styles
import styles from '../../css/components/Flower.module.css';

// Dependencies
import React from 'react';


const Flower = (props) => {
    return (
        <div className={styles['flower']}>
            <img src={process.env.PUBLIC_URL + `/images/${props.info.image_name}.jpg`} alt={props.info.image_name} />
            <h3>{props.info.name}</h3>
            <h5>{props.info.scientific_name}</h5>
        </div>
    );
};
export default Flower;