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
        <h1> Enter the One-time-password received on your email.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>OTP</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your OTP'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={() => history.push('/Home')} >
          Verify
        </button>
      </form>
    </div>
  );
};
   
export default FormSignup;
