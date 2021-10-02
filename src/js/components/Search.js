// Styles
import styles from '../../css/components/Search.module.css';

// Icons
import {BiSearch} from 'react-icons/bi';
import {FaRegCheckSquare, FaCheckSquare} from 'react-icons/fa';

// Dependencies
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {addName, deleteName, addColour, deleteColour, deleteAllColours} from '../actions';


const Search = () => {
    const dispatch = useDispatch();
    const colourState = useSelector(state => state.colourReducer.colours);

    const [name, setName] = useState('');
    const searchName = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            return alert('Please, write something');
        }
        dispatch(deleteAllColours());
        dispatch(addName(name));
        setName('');
    };

    const searchColour = (e) => {
        dispatch(deleteName());
        if (colourState.includes(e.target.id)) {dispatch(deleteColour(e.target.id))}
        else {dispatch(addColour(e.target.id))};
    };

    const deleteFilters = () => {
        dispatch(deleteName());
        dispatch(deleteAllColours());
    };

    return (
        <div className={styles['search-container']}>
            <form onSubmit={searchName} className={styles['search-form']}>
                <input
                    type='text' 
                    placeholder='Search...' 
                    className={styles['searchbar']} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles['search-button']}><BiSearch /></button>
            </form>

            {/* ----- CHECKBOX ----- */}
            <div className={styles['checkbox-container']}>
                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='white' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('white') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    White
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='blue' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('blue') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Blue
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='purple' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('purple') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Purple
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='rose' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('rose') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Rose
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='red' className={styles['checkbox-input']}  onClick={searchColour}/>
                    <span className={styles['checkmark']}>
                        {colourState.includes('red') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Red
                </label>

                <label className={styles['checkbox-label']}> 
                    <input type='checkbox' id='orange' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('orange') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Orange
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='yellow' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('yellow') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Yellow
                </label>

                <label className={styles['checkbox-label']}>
                    <input type='checkbox' id='green' className={styles['checkbox-input']} onClick={searchColour} />
                    <span className={styles['checkmark']}>
                        {colourState.includes('green') ? <FaCheckSquare /> : <FaRegCheckSquare />}
                    </span>
                    Green
                </label>
            </div>

            <button onClick={deleteFilters} className={styles['no-filter']}>Remove Filters</button>
        </div>
    );
};
export default Search;