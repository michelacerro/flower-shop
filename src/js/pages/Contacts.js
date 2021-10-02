// Styles
import styles from '../../css/pages/Contacts.module.css';

// Icons
import {GrInstagram, GrFacebook} from 'react-icons/gr';
import {FaMapMarkerAlt} from 'react-icons/fa';

// Dependencies
import React from 'react';
import GoogleMapReact from 'google-map-react';


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
                    <h4>+44 829 7246 234</h4>
                    <h4>info@thefloweshop.com</h4>
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
                    <GoogleMapReact 
                        bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY}}
                        defaultCenter={{lat: 45.10665, lng: 7.63042}}
                        defaultZoom={15}
                    >
                        <FaMapMarkerAlt
                            lat={45.10665}
                            lng={7.63042}
                            className={styles['marker']}
                        />
                    </GoogleMapReact>
                </div>
            </div>

            {/* ----- FORM BOX */}
            <form className={styles['form-box']}>
                <input type='text' placeholder='Name' className={styles['input-line']} />
                <input type='text' placeholder='Lastname' className={styles['input-line']} />
                <input type='text' placeholder='Email' className={styles['input-line']} />
                <textarea placeholder='Write your message...' />
                <button type='submit' className={styles['form-button']}>Send</button>
            </form>
        </div>
    );
};
export default Contacts;