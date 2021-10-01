// Styles
import styles from '../../css/pages/Products.module.css';

// Icons
import {IoSearch, IoClose} from 'react-icons/io5';

// Dependencies
import React, {useState} from 'react';

// Components
import Search from '../components/Search';
import Flower from '../components/Flower';


const Products = () => {
    const [open, setOpen] = useState(false);
    const showSearch = () => {
        const search = document.getElementById('search');
        setOpen(!open);

        if (open === false) {search.style.display = 'block';}
        else {search.style.display = 'none';}
    }

    return (
        <div className={styles['page']}>
            <button onClick={showSearch} className={styles['search-button']}>
                {open ? <IoClose /> : <IoSearch />}
            </button>
            <div id='search' className={styles['search-box']}>
                <Search />
            </div>
            <div className={styles['flowers-box']}>
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower />
            </div>
        </div>
    );
};
export default Products;