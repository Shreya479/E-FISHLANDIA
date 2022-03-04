import React from 'react';
import './firstPage.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
  const FirstPage = ()=>{
    const history = useHistory();
      return(
        <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='https://66.media.tumblr.com/1bcea32365c30c81f5124c216a2f8c82/tumblr_p8tps3qBz71xtapwxo2_500.gif' alt='spaceship' />
        </div>
        <div className='form-content-right'>
      <form className='form'>
      <h1>Welcome to FISH LANDIA
        </h1>
        <button className='form-input-btn'onClick={() => history.push('/Login')} >
          ADMIN
        </button>
        <button className='form-input-btn' onClick={() => history.push('/')}> USER
        </button>
      </form>
    </div>
      </div>
      )};
export default FirstPage;