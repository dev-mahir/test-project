import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import SinglePost from "./pages/SinglePost/SinglePost";
import { get_author } from "./redux/author/action";
import { get_category } from "./redux/category/action";
import { get_post } from "./redux/post/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_post());
    dispatch(get_author());
    dispatch(get_category());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
