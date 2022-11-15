import { React } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive'
import {
  NavLink,
} from 'react-router-dom';
const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const isLargerDisplay = useMediaQuery({ query: '(min-width: 1000px'})
    return (
      <>
        <div className="navbar">
          <div className="logo-container"></div>
          { isLargerDisplay &&
            <>
              <NavLink to='/services'>Services</NavLink>
              <NavLink to='/whatweclean'>What We Clean</NavLink>
              <NavLink to='/howitworks'>How it Works</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/pricing'>Pricing</NavLink>
            </>
          }
          <div className="col nav-btns">
            <button className="call-btn">Call (555) 333-2323</button>
            <button className="quote-btn">Free Quote</button>
          </div>
          { isTabletOrMobile && 
            <AiOutlineMenu className="hamburger-icon"/>
          }
          
        </div>
      </>
    );
  }
  
  export default Navbar;
  