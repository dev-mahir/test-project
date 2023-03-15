import { GET_POST} from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer
const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
