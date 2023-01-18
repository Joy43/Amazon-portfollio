import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
           <nav>
             
           <a href='/shop'>Shop now</a>
            <a href='/review'>order review</a>
             
           
            <a href='/manage'>Manage inventoty</a>
           </nav>
        </div>
    );
};

export default Header;