import axios from "axios";
import * as actionTypes from "./actionTypes";

// fetch
const fetchCategoryStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORY_START,
  };
};
const fetchCategorySuccess = (data) => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    payload: data,
  };
};
const fetchCategoryFail = (err) => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAIL,
    payload: err,
  };
};
export const fetchCategory = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const { data } = await axios.get("/categories");
      dispatch(fetchCategorySuccess(data.data));
      
  } catch (err) {
    console.log(err);
    dispatch(fetchCategoryFail(err.message));
  }
};

// add
const addCategoryStart = () => {
  return {
    type: actionTypes > actionTypes.ADD_CATEGORY_START,
  };
};
const addCategorySuccess = (data) => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    payload: data,
  };
};
const addCategoryFail = (err) => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
    payload: err,
  };
};
export const addCategory = (token, name) => async (dispatch) => {
  dispatch(addCategoryStart());
  try {
    const {data} = await axios.post(
      "/categories",
      {
        title: name,
      },
      {
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
      }
    );
      dispatch(addCategorySuccess(data.data))
  } catch (er) {
    console.log(er);
    dispatch(addCategoryFail(er.message));
  }
};
