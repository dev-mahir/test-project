import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/icons/search.svg'
import './search.css';


const Search = ({style}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/post/search?${searchValue}`);
    }
  }


  return (
    <div className="search" style={style}>
      <img src={search} alt="" />
      <input name='search' onKeyDown={handleSearch} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search...' />
    </div>
  )
}

export default Search