// Styles
import styles from '../../css/pages/Error.module.css';

// Dependencies
import React from 'react';


const Error = () => {
    return (
        <div className={styles['error-page']}>
            <h1>Page not found</h1>
        </div>
    );
};
export default Error;