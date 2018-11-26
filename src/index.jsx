import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../public/index.css';
import Routes from './route';
import configStore from './store/configStore';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import '../node_modules/toastr/build/toastr.min.css';

const store = configStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <div className="container"><Routes /></div>
  </Provider>, document.getElementById('root')
);

if (module.hot) module.hot.accept();