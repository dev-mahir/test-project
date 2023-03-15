import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SinglePost from "./components/Home/SinglePost/SinglePost";
import HomePage from "./pages/HomePage";
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
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
