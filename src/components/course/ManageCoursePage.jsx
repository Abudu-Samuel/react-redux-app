/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import validateInput from '../../helper/validation';

class ManageCoursePage extends Component {
  state = {
    errors: {},
    title: '',
    category: '',
    authorId: '',
    length: ''
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({
        course: nextProps.course
      });
    }
  }

  updateCourseState = (event) => {
    const { name, value } = event.target;
    // eslint-disable-next-line react/no-access-state-in-setstate
    const { course } = this.props;
    if (course.authorId !== '') {
      this.setState({
        ...course
      });
    }
    this.setState({ [name]: value });
  }

  saveCourse = (event) => {
    event.preventDefault();
    const { course } = this.props;
    if (this.state.authorId === '' && course.authorId !== '') {
      this.setState({
        ...course
      }, () => this.validateAndDispatchAction());
      return;
    }
    this.validateAndDispatchAction();
  }

  validateAndDispatchAction = () => {
    const validateErrors = validateInput({
      ...this.state,
      title: this.state.title.split(' ').join(''),
      authorId: this.state.authorId.split(' ').join('')
    });
    if (Object.keys(validateErrors).length > 0) {
      this.setState({ errors: validateErrors });
      return;
    }
    this.setState({ errors: {} });
    this.props.actions.saveCourse(this.state)
      .then(() => {
        this.props.history.push('/courses');
      });
  }

  render() {
    const { errors } = this.state;
    const { authors, isSaving, course } = this.props;
    return (
      <div>
        <h1>Manage course</h1>
        <CourseForm
          allAuthors={authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state}
          courseToModify={course}
          isSaving={isSaving}
          errors={errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSaving: PropTypes.bool.isRequired
};

const getCourseById = (courses, id) => {
  const course = courses.allCourses.courses.filter(course => course.id === id);
  if (course) return course[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id;
  let course = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
  };

  if (state.courses.allCourses.courses) {
    if (courseId && state.courses.allCourses.courses.length > 0) {
      course = getCourseById(state.courses, courseId);
    }
  }

  const authorsFormattedForDropdown = state.authors.allAuthors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`
  }));

  return {
    course,
    authors: authorsFormattedForDropdown,
    isSaving: state.courses.isSaving
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);