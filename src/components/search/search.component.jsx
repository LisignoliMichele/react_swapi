import React from 'react';
import './search.stylesheet.scss';

export const Search = ({placeholder, handleChange}) => (
   <div className='search'>
      <i className="icon fas fa-search"></i>
      <input 
         type='search' 
         placeholder={placeholder} 
         onChange={handleChange} 
      />
      
   </div>
)