import axios from "axios";
import { API_BASE_URL } from "../../api/api";
import { GET_AUTHOR } from "./actionTypes";



export const get_author = () => async (dispatch) => {
  try {
    await axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/users`)
      .then((res) => {
        dispatch({ type:GET_AUTHOR, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
