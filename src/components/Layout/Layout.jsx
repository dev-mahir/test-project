import React from 'react';
import './layout.css'
import { Link } from "react-router-dom";
import network from '../../assets/icons/network.svg'
import wifi from '../../assets/icons/wifi.svg'
import battery from '../../assets/icons/battery.svg'
import home from '../../assets/icons/home.svg'
import user from '../../assets/icons/user.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';


const Layout = ({ children }) => {
  const { loader } = useSelector(state => state.loaderReducer);

  return (
    <div className='wrapper'>

      <div className='box'>
        <div className="top-area">
          <div> <p>9:41</p></div>
          <div className='info'>
            <img src={network} alt="" />
            <img src={wifi} alt="" />
            <img src={battery} alt="" />
          </div>
        </div>

        <div className="main-content">
          {!loader ? children : <Loader />}
        </div>
        <div className="shadow"></div>
        <div className="bottom-area">
          <Link to="/"><img src={home} alt="" /></Link>
          <Link to="/"><img src={bookmark} alt="" /></Link>
          <Link to="/"><img src={user} alt="" /></Link>
        </div>
      </div>


    </div>
  )
}

export default Layout