import React from 'react';
import './search.stylesheet.scss';

export const Search = ({placeholder, handleChange}) => (
   <input 
      className='search'
      type='search' 
      placeholder={placeholder} 
      onChange={handleChange} 
   />
)