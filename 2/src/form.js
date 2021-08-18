import React, { useContext, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import {useSpring, animated} from 'react-spring';
import './App.css'

function Form() {

    const props = useSpring({ to: {opacity: 1}, from: {opacity: 0}, delay: 100})

    return (
        <animated.form style={props}>
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
            <Example></Example>
        </animated.form>
    );
}

function Button({isLoading, children, ...props}) {

    const [showLoader, setShowLoader] = React.useState(false);

    React.useEffect(() => {
        if (isLoading) {
          setShowLoader(true);
        }
      
        // Show loader a bits longer to avoid loading flash
        if (!isLoading && showLoader) {
          const timeout = setTimeout(() => {
            setShowLoader(false);
          }, 1500);
      
          // Don’t forget to clear the timeout
          return () => {
            clearTimeout(timeout);
          };
        }
      }, [isLoading, showLoader]);

    return (
        <button className={'button'} {...props}>
            {isLoading ? <Loader color={'#fff'} type={'ThreeDots'} height={'30'} width={'50'} /> : 'Continue'}
        </button>
    )
}

function Example () {
    const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  
    return (
      <Button
        onClick={() => {
          setIsButtonLoading(true);
          setTimeout(() => {
            setIsButtonLoading(false);
          }, 1000);
        }}
        isLoading={isButtonLoading}
      />
    );
}

export default Form;
