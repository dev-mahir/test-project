import moment from 'moment/moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './postcard.css'

const PostCard = ({ posts }) => {
  const { categories } = useSelector(state => state.categoryReducer);

  return (
    <>
      {posts?.map((item, index) => {
        const category = categories?.filter(cat => cat.id === item.categories[1])
        return <div className="post-card" key={index}>
          <div className="image">
            <Link to={`/post/${item.id}`}><img src={item.images.photos[0].src.original} alt="" /></Link>
          </div>
          <div className='content'>
            <div className='info'>
              <p className='cat'>{category[0]?.name}</p>
              <div className='date-views'>
                <p className="date">{moment(item.date).format("ll") }</p>
                <p className='views'>{item.views} views</p>
              </div>
            </div>
            <div>
              <Link to={`/post/${item.id}`}><h2> {item.title.rendered}</h2></Link>
            </div>
          </div>
        </div>
      })}
    </>
  )
}

export default PostCard