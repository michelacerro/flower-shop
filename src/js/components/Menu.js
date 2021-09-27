// Styles
import styles from '../../css/components/Menu.module.css';

// Icons
import {FiMenu} from 'react-icons/fi';
import {IoClose} from 'react-icons/io5';

// Dependecies
import React, {useState} from 'react';
import {Link} from'react-router-dom';


const Menu = () => {
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        const menu = document.getElementById('menu');
        setOpen(!open);
        if (open === false) {menu.style.display = 'flex';}
        else {menu.style.display = 'none';};
        
    };

    return (
        <>
            <div className={styles['menu-vertical']}>
                <div onClick={showMenu}>{open ? <IoClose className={styles['menu-button']} /> : <FiMenu className={styles['menu-button']} />}</div>
                <div id='menu' className={styles['menu-box']}>
                    <Link to ='/' className={styles['link']}>Home</Link>
                    <div className={styles['divider']}></div>
                    <Link to='/products' className={styles['link']}>Products</Link>
                    <div className={styles['divider']}></div>
                    <Link to='/contacts' className={styles['link']}>Contacts</Link>
                </div>
            </div>
            <div className={styles['menu-horizontal']}>
                <Link to ='/' className={styles['link']}>Home</Link>
                <Link to='/products' className={styles['link']}>Products</Link>
                <Link to='/contacts' className={styles['link']}>Contacts</Link>
            </div>
        </>
    );
};
export default Menu;