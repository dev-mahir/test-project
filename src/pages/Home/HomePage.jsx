import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import { useSelector } from 'react-redux';
import './home.css'
import PostCard from '../../components/PostCard/PostCard';
import PostSlider from '../../components/Home/PostSlider/PostSlider';
import CatMenu from '../../components/Home/CatMenu/CatMenu';


const HomePage = () => {
  const { posts } = useSelector(state => state.postReducer);
  const [catPost, setCatPost] = useState([])

  useEffect(() => {
    setCatPost(posts.slice(0, 2));
  }, [posts]);
  return (
    <>
    
      
      <Layout>
        <div className="home">
          <Search style={{ margin: "16px  20px 0" }} />
          <div className="post-show">
            <h2 className='reco'>Recommended</h2>
            <PostSlider/>
          </div>
          <div className="divider"></div>
          <CatMenu setCatPost={setCatPost} />
          <PostCard posts={catPost.slice(0, 5)} />
          {catPost.length === 0 && <p className='cat-no-post'> No post found</p>}
        </div>
      </Layout>
    </>
  )
}

export default HomePage;