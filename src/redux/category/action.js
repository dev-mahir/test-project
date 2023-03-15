import axios from "axios";
import { API_BASE_URL } from "../../api/api";
import { GET_CAT } from "./actionTypes";



export const get_category = () => async (dispatch) => {
  try {
    await axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/categories`)
      .then((res) => {
        dispatch({ type: GET_CAT, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
