import React from 'react';
import Layout from '../../Layout/Layout';
import './single-post.css';
import { useParams } from "react-router-dom";
import bookmark from '../../../assets/icons/bookmark.svg';
import Search from '../../Search/Search';
import left_arrow from '../../../assets/icons/left-arrow.svg'
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';


const SinglePost = () => {
  const { posts } = useSelector(state => state.postReducer);
  const { author } = useSelector(state => state.authorReducer);
  const { categories } = useSelector(state => state.categoryReducer);
  const { id } = useParams();
  const singlePost = posts.filter(post => post.id === Number(id));
  const authorId = singlePost[0]?.author;
  const authorInfo = author?.find(author => author.id === authorId);
  // const category = categories.filter(cat => post.id === Number(id));
  console.log(categories);
  const content = singlePost[0]?.content?.rendered

  console.log(singlePost);


  return (
    <Layout>
      {singlePost.length === 0 ? "loading" :
        <>
          <div className="search-sec">
            <button>
              <img src={left_arrow} alt="" />
            </button>
            <Search />
          </div>
          <div className='single-post'>
            <div className="image">
              <img src={singlePost[0].images.photos[0].src.original} alt="" />
              <div className='bookmark'>
                <img src={bookmark} alt="" />
              </div>
            </div>
            <div className="post-info">
              <p className='cat'>Technology</p>
              <div className='date-views'>
                <p className="date"> Jan 3, 2022</p>
                <p className='views'>3344 views</p>
              </div>
            </div>
            <h2>{singlePost[0].title.rendered}</h2>

            <div className='author'>
              <img src="https://m.timesofindia.com/photo/83890830/83890830.jpg" alt="" />
              <p>By: <span>{authorInfo?.name}</span></p>
            </div>

            <div className="post-desc">
               {ReactHtmlParser(content)} 
            </div>

          </div>
        </>


      }
    </Layout>
  )
}

export default SinglePost