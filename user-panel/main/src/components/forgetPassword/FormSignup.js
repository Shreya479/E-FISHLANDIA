import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Forget Password ?
          <br></br>
          Reset Now !!
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
        <button className='form-input-btn' type='submit'>
          LOGIN AGAIN
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
