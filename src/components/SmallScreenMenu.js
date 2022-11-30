import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
  
const SmallScreenMenu = (props) => {
  const {menuOpen, setMenuOpen} = props;
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }
    return (
      <div onClick={handleClick} className="open-menu col">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/howitworks'>How it Works</NavLink>
        <NavLink to='/getaquote'>Request a Free Quote</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
      </div>
    );
  }
  
  export default SmallScreenMenu;
  