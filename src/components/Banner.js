import React from 'react';
import {NavLink} from 'react-router-dom';

const Banner = () => {
    return (
      <div className="banner">
        <div className="banner-btn-container">
          <h1>Try our hassle free, online quoting process free of charge.</h1>
          <NavLink className="quote-btn banner-btn" to='/getaquote'>Free Online Quote</NavLink>
        </div>
      </div>
    );
  }
  
  export default Banner;
  