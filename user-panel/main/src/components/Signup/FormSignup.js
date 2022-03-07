import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
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
        <h1>Welcome to FISH LANDIA...
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Re-enter your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mobile Number</label>
          <input
            className='form-input'
            placeholder='Enter your mobile number'
            value={values.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={() => history.push('/Login')} >
          SIGN UP
        </button>
        <span className='form-input-login'>
          Forget Password ? Click <a href='#' onClick={() => history.push('/ForgetPassword')}>here</a>
        </span>
      </form>
    </div>
  );
};
   
export default FormSignup;
