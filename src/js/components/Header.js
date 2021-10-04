// Styles
import styles from '../../css/components/Header.module.css';

// Icons
import {GiFlowerPot} from 'react-icons/gi';

// Depenedencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Menu from './Menu';


const Header = () => {
    return (
        <div className={styles['header']}>
            <div className={styles['navbar']}>
                <div className={styles['logo']}>
                    <Link to='/flower-shop' className={styles['link-logo']}><GiFlowerPot /></Link>
                </div>
                <h1 className={styles['name']}>
                    The Flower Shop
                </h1>
                <Menu />
            </div>
            <div className={styles['divider']}></div>
        </div>
    );
};
export default Header;