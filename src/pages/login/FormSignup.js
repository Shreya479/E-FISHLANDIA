import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Home from '../home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const history = useHistory();

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Remember !! WHY YOU STARTED ?
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={() => history.push('/Home')}>
          Sign up
        </button>
        <span className='form-input-login'>
          Forget Password ? <a href='#' onClick={() => history.push('/ForgetPassword')}>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
