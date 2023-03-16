import React from 'react';
import Layout from '../../components/Layout/Layout';
import './single-post.css';
import { Link, useParams } from "react-router-dom";
import bookmarkW from '../../assets/icons/bookmark-white.svg';
import Search from '../../components/Search/Search';
import left_arrow from '../../assets/icons/left-arrow.svg'
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment/moment';

const SinglePost = () => {
  const { posts } = useSelector(state => state.postReducer);
  const { author } = useSelector(state => state.authorReducer);
  const { categories } = useSelector(state => state.categoryReducer);
  const { id } = useParams();
  const singlePost = posts.filter(post => post.id === Number(id));
  const authorId = singlePost[0]?.author;
  const catId = singlePost[0]?.categories[0]
  const authorInfo = author?.find(author => author.id === authorId);
  const category = categories.filter(cat => cat.id === Number(catId));
  const content = singlePost[0]?.content?.rendered

  return (
    <Layout>
      {singlePost.length === 0 ? "loading" :
        <>
          <div className="search-sec">
            <Link to="/">
              <img src={left_arrow} alt="" />
            </Link>
            <Search />
          </div>
          <div className='single-post'>
            <div className="image">
              <img src={singlePost[0]?.images.photos[0].src.original} alt="" />
              <div className='bookmark'>
                <img src={bookmarkW} alt="" />
              </div>
            </div>
            <div className="post-info">
              <p className='cat'>{category[0]?.name}</p>
              <div className='date-views'>
                <p className="date">{moment(singlePost[0]?.date).format('ll')}</p>
                <p className='views'>{singlePost[0]?.views} views</p>
              </div>
            </div>
            <h2>{singlePost[0].title.rendered}</h2>
            <div className='author'>
              <img src={authorInfo?.avatar_urls[24]} alt="" />
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