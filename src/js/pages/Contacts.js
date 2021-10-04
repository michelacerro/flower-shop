// Styles
import styles from '../../css/pages/Contacts.module.css';

// Icons
import {GrInstagram, GrFacebook} from 'react-icons/gr';


// Dependencies
import React from 'react';

// Components
import Map from '../components/Map';
import Form from '../components/Form';


const Contacts = () => { 

    return (
        <div className={styles['contacts']}>

            {/* ----- INFO BOX */}
            <div className={styles['info-box']}>
                <h2>The Flower Shop</h2>
                <div className={styles['section']}>
                    <h3>Via dei Ciclamini, 5</h3>
                    <h3>Torino (TO)</h3>
                </div>
                <div className={styles['section']}>
                    <h4>
                        <a href='tel:+390197246234'>+39 019 7246 234</a>
                        <br />
                        <a href='mailto:michelacerro@gmail.com' target='_blank' rel='noreferrer'>
                            info@thefloweshop.com</a>
                    </h4>
                </div>
                <div className={styles['socials']}>
                    <a href='https://it-it.facebook.com/' 
                        target='_blank' 
                        rel='noreferrer'
                        className={styles['link']}
                    >
                        <GrFacebook />
                    </a>
                    <a href='https://www.instagram.com' 
                        target='_blank' 
                        rel='noreferrer'
                        className={styles['link']}
                    >
                        <GrInstagram />
                    </a>
                </div>
                <div id='map' className={styles['map']}>
                    <Map />
                </div>
            </div>

            {/* ----- FORM BOX */}
            <Form />
        </div>
    );
};
export default Contacts;