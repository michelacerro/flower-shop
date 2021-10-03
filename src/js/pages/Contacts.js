// Styles
import styles from '../../css/pages/Contacts.module.css';

// Icons
import {GrInstagram, GrFacebook} from 'react-icons/gr';
import {FaMapMarkerAlt} from 'react-icons/fa';

// Dependencies
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useForm} from '@formspree/react';


const Contacts = () => {  
    const [state, handleSubmit] = useForm('xdoyjznn');
    if (state.succeded) {
        return <div>Thanks!</div>
    }

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
                    <h4>+39 019 7246 234
                    <br />
                    <a href='mailto:michelacerro@gmail.com' target='_blank' rel='noreferrer'>
                        info@thefloweshop.com
                    </a></h4>
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
            <form className={styles['form-box']} onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    id='firstname'
                    name='firstname' 
                    placeholder='Firstname' 
                    className={styles['input-line']} 
                />
                <input 
                    type='text' 
                    id='lastname'
                    name='lastname' 
                    placeholder='Lastname' 
                    className={styles['input-line']} 
                />
                <input 
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Email' 
                    className={styles['input-line']} 
                />
                <textarea 
                    id='message'
                    name='message' 
                    placeholder='Write your message...' 
                />
                <button type='submit'  className={styles['form-button']}>Send</button>
            </form>
        </div>
    );
};
export default Contacts;