import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPages from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import NotFoundPage from './components/common/NotFoundPage';

export default () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPages} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
        <Route excat component={NotFoundPage} />
      </Switch>
    </Fragment>
  </Router>
);
