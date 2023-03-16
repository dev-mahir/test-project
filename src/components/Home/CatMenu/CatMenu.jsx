import React from 'react';
import { useSelector } from 'react-redux';
import './cat.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CatMenu = ({ setCatPost }) => {
  const { posts } = useSelector(state => state.postReducer);
  const { author } = useSelector(state => state.authorReducer);
  const { categories } = useSelector(state => state.categoryReducer);


  const handleCatMenu = (id) => {
    const catPost = posts.filter(item => item.categories.includes(id))
    setCatPost(catPost)
  }
  const handleCatAll = () => {
    setCatPost(posts.slice(0, 5))
  }

  return (
    <>
      <div className='cat-menu'>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          simulateTouch={true}
          touchRatio={1}
        >
          <SwiperSlide> <button className='active' onClick={handleCatAll}>All</button></SwiperSlide>
          {categories?.map((item, index) => {
            return <SwiperSlide key={index}> <button onClick={() => handleCatMenu(item.id)}>{item.name}</button></SwiperSlide>
          })}
        </Swiper>
      </div>
    </>



  )
}

export default CatMenu