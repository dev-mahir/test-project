import { GET_CAT} from "./actionTypes.js";
import initialState from "./initialState.js";

// create reducer
const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CAT:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
