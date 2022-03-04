import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from '../login/FormSuccess';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
      
        <div className='form-content-left'>
          <img className='form-img' src='https://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-morphing-devices.gif' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
