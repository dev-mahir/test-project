import { GET_AUTHOR} from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer
const authorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUTHOR:
      return {
        ...state,
        author: payload,
      };
    default:
      return state;
  }
};

export default authorReducer;
