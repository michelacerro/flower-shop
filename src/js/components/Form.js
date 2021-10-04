// Styles
import styles from '../../css/pages/Contacts.module.css';

// Dependencies
import React from 'react';
import {useForm, ValidationError} from '@formspree/react';


const Form = () => {  
    const [state, handleSubmit] = useForm('contactUs');
    if (state.succeeded) {
        return (
            <div className={styles['form-box']}>
                <h1 className={styles['thanks-message']}>Thank you <br />for your message!</h1>
            </div>
        );
    };

    return (

        <form className={styles['form-box']} onSubmit={handleSubmit}>
            <input 
                type='text' 
                id='name'
                name='name' 
                placeholder='Name' 
                className={styles['input-line']} 
            />
            <ValidationError field='name' prefix='Name' errors={state.errors} />
            <input 
                type='text'
                id='email'
                name='email'
                placeholder='Email' 
                className={styles['input-line']} 
            />
            <ValidationError field='email' prefix='Email' errors={state.errors} />
            <textarea 
                id='message'
                name='message' 
                placeholder='Write your message...' 
            />
            <ValidationError field='message' prefix='Message' errors={state.errors} />
            <button type='submit' className={styles['form-button']}>Send</button>
            <ValidationError errors={state.errors} />
        </form>
    );
};
export default Form;