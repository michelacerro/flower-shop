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
                <p className={styles['welcome-text']}>
                    Here you can find the best products for your compositions.
                    <br/> Watch the <Link to='/products' className={styles['link']}>catalogue</Link>.
                </p>
            </div>
        </div>
    );
};
export default Home;