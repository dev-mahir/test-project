import { combineReducers } from "redux";
import postReducer from "./post/postReducer.js";
import authorReducer from "./author/authorReducer.js";
import categoryReducer from "./category/categoryReducer.js";
import loaderReducer from "./loader/loaderReducer.js";

// create root reducer

const rootReducer = combineReducers({
  postReducer,
  authorReducer,
  categoryReducer,
  loaderReducer,
});

export default rootReducer;
