import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './searchpage.css';
import PostCard from '../../components/PostCard/PostCard'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../../components/Search/Search';

const SearchPage = () => {
  const { posts } = useSelector(state => state.postReducer);
  const [searchPosts, setsearchPosts] = useState([]);
  const { search } = useLocation();
  console.log(searchPosts);

  useEffect(() => {
    const searchValue = new RegExp(search.slice(1), 'i');
    const searchItem = posts.filter(item => searchValue.test(item.title.rendered))
    setsearchPosts(searchItem);
  }, [posts, search]);

  return (
    <Layout>
      <div className="search-page">
        <Search style={{ margin: "0 20px" }} />
        <div style={{ marginTop: "20px" }}>

          {searchPosts.length > 0 ?
            <PostCard posts={searchPosts} /> : <p className='search-post'>No post found</p>}
        </div>
      </div>

    </Layout>
  )
}

export default SearchPage;
