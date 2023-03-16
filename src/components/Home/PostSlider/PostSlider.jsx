import React from 'react';
import bookmarkW from '../../../assets/icons/bookmark-white.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './postslider.css'
import { Link } from 'react-router-dom';


const PostSlider = () => {
  const { posts } = useSelector(state => state.postReducer);
  const { author } = useSelector(state => state.authorReducer);
  const { categories } = useSelector(state => state.categoryReducer);
  const postItems = posts?.slice(0, 5)

  return (
    <div className='posts'>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        simulateTouch={true}
        touchRatio={1}
      >

        {postItems.map((item, index) => {
          const authorInfo = author?.find(author => author.id === item.author);
          const category = categories.filter(cat => cat.id === item.categories[1])

          return <SwiperSlide key={index}>    <div className='post-slider'>
            <div className='info'>
                <img className='photo' src={item.images.photos[0].src.original} alt="" />
              <div className='cat-bookmark'>
                <div className="category">
                  <span>{category[0]?.name}</span>
                </div>
                <div className='bookmark'>
                  <img src={bookmarkW} alt="" />
                </div>
              </div>
            </div>
            <Link to={`/post/${item.id}`}>
              <h2>{item.title.rendered}</h2>
            </Link>
            <div className="post-info">
              <div className='author'>
                <img src={authorInfo?.avatar_urls[24]} alt="" />
                <p>By: <span>{authorInfo?.name}</span></p>
              </div>
              <div className='date-views'>
                <p className="date">{moment(item.date).format('ll')}</p>
                <p className='views'>{item.views} views</p>
              </div>
            </div>
          </div> </SwiperSlide>


        }

        )}


      </Swiper>







    </div>

  )
}

export default PostSlider;