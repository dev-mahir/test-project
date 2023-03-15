import React from 'react'
import Layout from '../components/Layout/Layout';
import PostSlider from '../components/Home/PostSlider';
import CatMenu from '../components/Home/CatMenu';
import Search from '../components/Search/Search';

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="home">
          <Search />
          <div className="post-show">
            <h2 className='reco'>Recommended</h2>
            <PostSlider />
          </div>
          <div className="divider"></div>
          
          <CatMenu/>
        </div>

      </Layout>
    </>
  )
}

export default HomePage