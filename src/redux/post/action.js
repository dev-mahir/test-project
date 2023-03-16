import axios from "axios";
import { API_BASE_URL } from "../../api/api";
import { LOADER_END, LOADER_START } from "../loader/actionTypes";
import { GET_POST } from "./actionTypes";

export const get_post = () => async (dispatch) => {
  dispatch({ type: LOADER_START });
  try {
    await axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/posts`)
      .then((res) => {
        dispatch({ type: GET_POST, payload: res.data });
        dispatch({ type: LOADER_END });
      })
      .catch((error) => {
        dispatch({ type: LOADER_END });
        console.log(error);
      });
  } catch (error) {
    dispatch({ type: LOADER_END });
    console.log(error);
  }
};
