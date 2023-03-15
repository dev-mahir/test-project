import React from 'react';
import search from '../../assets/icons/search.svg'
import './search.css';


const Search = () => {
  return (
    <div className="search">
      <img src={search} alt="" />
      <input type="text" placeholder='Search...' />
    </div>
  )
}

export default Search