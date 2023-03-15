import React from 'react';
import bookmark from '../../assets/icons/bookmark.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PostSlider = () => {
  const settings = {
 
  };
  return (
    <>
      <Slider {...settings}>
        <div className='post-slider'>
          <div className='info'>
            <img className='photo' src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <div className='cat-bookmark'>
              <div className="category">
                <span>Technology</span>
              </div>
              <div className='bookmark'>
                <img src={bookmark} alt="" />
              </div>
            </div>
          </div>
          <h2>New Vr Headssets thar will shape the meraverse</h2>
          <div className="post-info">
            <div className='author'>
              <img src="https://m.timesofindia.com/photo/83890830/83890830.jpg" alt="" />
              <p>By: <span>Mason Eduard</span></p>
            </div>
            <div className='date-views'>
              <p className="date"> Jan 3, 2022</p>
              <p className='views'>3344 views</p>
            </div>
          </div>

        </div>
        <div className='post-slider'>
          <div className='info'>
            <img className='photo' src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <div className='cat-bookmark'>
              <div className="category">
                <span>Technology</span>
              </div>
              <div className='bookmark'>
                <img src={bookmark} alt="" />
              </div>
            </div>
          </div>
          <h2>New Vr Headssets thar will shape the meraverse</h2>
          <div className="post-info">
            <div className='author'>
              <img src="https://m.timesofindia.com/photo/83890830/83890830.jpg" alt="" />
              <p>By: <span>Mason Eduard</span></p>
            </div>
            <div className='date-views'>
              <p className="date"> Jan 3, 2022</p>
              <p className='views'>3344 views</p>
            </div>
          </div>

        </div>
        <div className='post-slider'>
          <div className='info'>
            <img className='photo' src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <div className='cat-bookmark'>
              <div className="category">
                <span>Technology</span>
              </div>
              <div className='bookmark'>
                <img src={bookmark} alt="" />
              </div>
            </div>
          </div>
          <h2>New Vr Headssets thar will shape the meraverse</h2>
          <div className="post-info">
            <div className='author'>
              <img src="https://m.timesofindia.com/photo/83890830/83890830.jpg" alt="" />
              <p>By: <span>Mason Eduard</span></p>
            </div>
            <div className='date-views'>
              <p className="date"> Jan 3, 2022</p>
              <p className='views'>3344 views</p>
            </div>
          </div>

        </div>
        <div className='post-slider'>
          <div className='info'>
            <img className='photo' src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <div className='cat-bookmark'>
              <div className="category">
                <span>Technology</span>
              </div>
              <div className='bookmark'>
                <img src={bookmark} alt="" />
              </div>
            </div>
          </div>
          <h2>New Vr Headssets thar will shape the meraverse</h2>
          <div className="post-info">
            <div className='author'>
              <img src="https://m.timesofindia.com/photo/83890830/83890830.jpg" alt="" />
              <p>By: <span>Mason Eduard</span></p>
            </div>
            <div className='date-views'>
              <p className="date"> Jan 3, 2022</p>
              <p className='views'>3344 views</p>
            </div>
          </div>

        </div>
      </Slider>

    </>

  )
}

export default PostSlider;