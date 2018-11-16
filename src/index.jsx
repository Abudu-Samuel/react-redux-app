import React from 'react';
import { render } from 'react-dom';
import '../public/index.css';
import Routes from './route';

render(
  <div className="container"><Routes /></div>, document.getElementById('root')
);

if (module.hot) module.hot.accept();