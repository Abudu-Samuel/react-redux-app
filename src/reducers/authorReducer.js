import { LOAD_AUTHOR_SUCCESS } from '../actions/actionTypes';

const initialState = {
  allAuthors: []
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTHOR_SUCCESS:
      return { ...state, allAuthors: action.authors };
    default:
      return state;
  }
};

export default authorReducer;