// Styles
import styles from '../../css/pages/Contacts.module.css';

// Icons
import {GrInstagram, GrFacebook} from 'react-icons/gr'

// Dependencies
import React from 'react';

const Contacts = () => {
    return (
        <div className={styles['contacts']}>

            {/* ----- INFO BOX */}
            <div className={styles['info-box']}>
                <h2>The Flower Shop</h2>
                <div className={styles['section']}>
                    <h3>Via delle ortiche, 10</h3>
                    <h3>Grugliasco (TO)</h3>
                </div>
                <div className={styles['section']}>
                    <h4>+01 8297246 2348</h4>
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
                <div className={styles['map']}>
                </div>
            </div>

            {/* ----- FORM BOX */}
            <form className={styles['form-box']}>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Lastname' />
                <input type='text' placeholder='Email' />
                <textarea placeholder='Write your message...' />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};
export default Contacts;