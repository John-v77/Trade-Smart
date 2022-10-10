import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

function Navbar(props) {
  return (
    <div className='navBar shadow'>
      <img src={logo} alt='logo' />
      <div className='navBarLinks'>
        <Link to='/'>Home</Link>
        <Link to='/WatchList'>Watch List</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
