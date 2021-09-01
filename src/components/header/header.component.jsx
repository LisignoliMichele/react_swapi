import React from 'react';
import { Link } from 'react-router-dom';

import './header.stylesheet.scss'

const Header = () => (
   <div className='header'>
      <Link className='logo-container' to="/">
      </Link>
      <div className='options'>
         <Link className='option' to="/home">HOME</Link>
         <Link className='option' to="/characters">CHARACTERS</Link>
      </div>
   </div>
)

export default Header;