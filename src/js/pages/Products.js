// Styles
import styles from '../../css/pages/Products.module.css';

// Icons
import {IoSearch, IoClose} from 'react-icons/io5';

// Dependencies
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// JSON
import Flowers from '../../flowers.json';

// Components
import Search from '../components/Search';
import Flower from '../components/Flower';

// Actions
import {deleteName, deleteAllColours} from '../actions';


const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(deleteName());
        dispatch(deleteAllColours());
    }, [dispatch]);
    
    const [open, setOpen] = useState(false);
    const showSearch = () => {
        const search = document.getElementById('search');
        setOpen(!open);

        if (open === false) {search.style.display = 'block';}
        else {search.style.display = 'none';}
    };

    const nameState = useSelector(state => state.nameReducer.state);   
    const colourState = useSelector(state => state.colourReducer.colours);

    const searching = [];
    Flowers.map(flower => {
        if (flower.name.includes(nameState)) {searching.push(true)}
        return searching;
    })


    return (
        <div className={styles['page']}>
            
            <button onClick={showSearch} className={styles['search-button']}>
                {open ? <IoClose /> : <IoSearch />}
            </button>
            <div id='search' className={styles['search-box']}>
                <Search />
            </div>

            <div className={styles['flowers-box']}>
                {nameState !== '' 
                    ?
                        searching.includes(true)
                            ?
                                Flowers.map(flower => (flower.name.includes(nameState)) 
                                    ?
                                        <Flower key={flower.id} info={flower} />
                                    :
                                        <div key={flower.id}></div>
                            ) :
                                <div className={styles['no-results']}>No results found with "<span>{nameState}</span>".</div>
                    : (
                        colourState.length === 0 
                            ?
                                Flowers.map(flower => <Flower key={flower.id} info={flower} />)
                            :
                                Flowers.filter(colour => colourState.includes(colour.colour)).map(flower => <Flower key={flower.id} info={flower} />)              
                    )}
            </div>
        </div>
    );
};
export default Products;