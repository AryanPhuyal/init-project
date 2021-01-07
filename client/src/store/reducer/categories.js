import * as actionTypes from "../action/actionTypes";
import updateObject from "../utils";
const init = {
  categories: [],
  loading: false,
  success: null,
  error: null,
};

const fetchCategoiesStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchCategoiesSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    categories: action.payload,
  });
};
const fetchCategoiesFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  });
};

const addCategoriesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const addCategoriesSuccess = (state, action) => {
  const categories = state.categories;
  categories.unshift(action.payload);
  return updateObject(state, { loading: false, categories: categories });
};
const addCategoriesFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.payload });
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_START:
      return fetchCategoiesStart(state, action);
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return fetchCategoiesSuccess(state, action);
    case actionTypes.FETCH_CATEGORY_FAIL:
      return fetchCategoiesFail(state, action);
    case actionTypes.ADD_CATEGORY_START:
      return addCategoriesStart(state, action);
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return addCategoriesSuccess(state, action);
    case actionTypes.ADD_CATEGORY_FAIL:
      return addCategoriesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
