import { LOADER_END, LOADER_START } from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer
const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER_START:
      return {
        loader: true,
      };
    case LOADER_END:
      return {
        loader: false,
      };

    default:
      return state;
  }
};

export default loaderReducer;
