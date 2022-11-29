import { React } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import {
  NavLink,
} from 'react-router-dom';
const Navbar = (props) => {
  const {menuOpen, setMenuOpen} = props;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const isLargerDisplay = useMediaQuery({ query: '(min-width: 1000px'})
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
    console.log('handleOpen', menuOpen)
  }
    return (
      <>
        <div className="navbar">
          <div className="logo-container"></div>
          { isLargerDisplay &&
            <>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/services'>Services</NavLink>
              <NavLink to='/howitworks'>How it Works</NavLink>
              <NavLink to='/getaquote'>Request a Free Quote</NavLink>
              <NavLink to='/pricing'>Pricing</NavLink>
            </>
          }
          <div className="col nav-btns">
            <button className="call-btn">Call (555) 333-2323</button>
            <NavLink className="quote-btn" to='/getaquote'>Free Online Quote</NavLink>
          </div>
          { isTabletOrMobile &&
              <AiOutlineMenu className="hamburger-icon" onClick={handleOpen}/>
          }
        </div>
      </>
    );
  }
  
  export default Navbar;
  