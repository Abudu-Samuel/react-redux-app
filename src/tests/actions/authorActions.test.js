import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/authorActions';
import { authors } from '../../api/mockAuthorApi';

const middleware = [thunk];
const storeMock = configMockStore(middleware);

describe('Author actions test', () => {
  describe('Load all authors based on action', () => {
    it('should load authors', (done) => {
      const action = [
        {
          type: types.LOAD_AUTHOR_SUCCESS,
          authors
        }
      ];

      const store = storeMock({});

      store.dispatch(actions.loadAuthors())
        .then(() => {
          expect(store.getActions()).toEqual(action);
          done();
        });
    });
  });
});