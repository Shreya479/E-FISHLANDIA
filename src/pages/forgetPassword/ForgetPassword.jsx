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
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://th.bing.com/th/id/R.9d5294ca10d61594b642016655e6bab2?rik=aCFsaVAiezgRuw&riu=http%3a%2f%2fwww.chroniclegraphics.com%2fcommunity%2fblog%2fwp-content%2fuploads%2f2015%2f09%2fspinning-gear.gif&ehk=CDY6vv2ZZxZ%2fg7HSv6%2bcolLFXd48bJzichKHqTupLOc%3d&risl=&pid=ImgRaw&r=0' alt='spaceship' />
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
