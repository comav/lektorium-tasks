import React from 'react';
import './App.css'

function Form() {
    return (
        <form>
            <div className={'input-wrapper'}>
                <label>Email</label>
                <input type={'email'}></input>
            </div>
            <div className={'input-wrapper'}>
                <div className={'label-wrapper'}>
                    <label>Password</label>
                    <a href="https://www.google.com">Forgot your password?</a>
                </div>
                <input type={'password'}></input>
            </div>
            <div className={'checkbox-wrapper'}>
                <input type={'checkbox'} className={'checkbox'}></input>
                <p>Stay signed in for a week</p>
            </div>
            <button className={'button'}>Continue</button>
        </form>
    );
}

export default Form;
