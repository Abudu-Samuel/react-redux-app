import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default configStore;