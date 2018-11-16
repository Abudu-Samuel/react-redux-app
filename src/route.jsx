import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPages from './components/course/CoursesPage';

export default () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPages} />
      </Switch>
    </Fragment>
  </Router>
);
