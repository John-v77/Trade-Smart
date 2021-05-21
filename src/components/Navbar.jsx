import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../images/logo.jpg';

function Navbar(props) {
    return (
        <div className="navBar shadow">
            <img src='/' alt='logo'/>
            <Link to='/'>Home</Link>
            <Link to='/'>Portfolion</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact</Link>           
        </div>
    );
}

export default Navbar;