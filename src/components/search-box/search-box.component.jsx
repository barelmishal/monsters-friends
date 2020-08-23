import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, handlechang }) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handlechang}/>
);

