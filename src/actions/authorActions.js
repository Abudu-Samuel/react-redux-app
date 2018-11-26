import { LOAD_AUTHOR_SUCCESS } from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export const loadAuthorSuccess = authors => ({
  type: LOAD_AUTHOR_SUCCESS,
  authors
});

export const loadAuthors = () => (dispatch) => {
  authorApi.getAllAuthors().then((authors) => {
    dispatch(loadAuthorSuccess(authors));
  }).catch((error) => {
    throw (error);
  });
};