import axios from "axios";
import { API_BASE_URL } from "../../api/api";
import { GET_POST } from "./actionTypes";



export const get_post = () => async (dispatch) => {
  try {
    await axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/posts`)
      .then((res) => {
        dispatch({ type: GET_POST, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
