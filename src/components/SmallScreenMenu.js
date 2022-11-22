import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
  
const SmallScreenMenu = () => {
    return (
      <div className="open-menu col">
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/whatweclean'>What We Clean</NavLink>
        <NavLink to='/howitworks'>How it Works</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
      </div>
    );
  }
  
  export default SmallScreenMenu;
  