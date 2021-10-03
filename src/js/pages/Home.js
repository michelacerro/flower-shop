// Styles
import styles from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className={styles['home']}>
            <div className={styles['text-box']}>
                <h1 className={styles['welcome-banner']}>Welcome <br /> at the Flower Shop!</h1>
                <div className={styles['welcome-text']}>
                    Watch the <Link to='/products' className={styles['link']}>catalogue</Link>.
                </div>
            </div>
        </div>
    );
};
export default Home;