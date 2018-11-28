import * as types from '../../actions/actionTypes';
import authorReducer from '../../reducers/authorReducer';
import mockedData from '../__mocks__/authorMock';

const initialState = {
  allAuthors: []
};

describe('Author Reducer tests', () => {
  describe('Return state', () => {
    it('should return the initial state of the reducer', (done) => {
      expect(authorReducer(undefined, {})).toEqual(initialState);
      done();
    });
  });

  describe('Load authors', () => {
    it('should fetch list of authors', (done) => {
      const { authors } = mockedData;
      const action = {
        type: types.LOAD_AUTHOR_SUCCESS,
        authors
      };

      const currentState = authorReducer(initialState, action);
      expect(currentState.allAuthors).toEqual(authors);
      done();
    });
  });
});