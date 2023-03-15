import React from 'react';
import './cat.css';

const CatMenu = () => {
  return (
    <div className='cat-menu'>
      <button className='active'>All</button>
      <button>Technology</button>
      <button>Lifestyle</button>
      <button>Bussiness</button>
      <button>Culture</button>
    </div>
  )
}

export default CatMenu