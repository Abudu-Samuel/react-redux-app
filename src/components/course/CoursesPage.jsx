import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-md-spinner';
import CourseList from './CourseList';
import { deleteCourse, loadCourses } from '../../actions/courseActions';

class CoursesPage extends Component {
  componentDidMount() {
    this.props.loadCourses();
  }

  componentDidUpdate() {
    const { totalCourses, currentPage, courses, loadCourses } = this.props;
    if (courses.length === 0 && currentPage > 1) {
      loadCourses(currentPage - 1);
    }
    if (courses.length === 0 && currentPage === 1) {
      loadCourses(currentPage);
    }
  }

  handlePageChange = ({ selected }) => {
    const { loadCourses } = this.props;
    loadCourses(selected + 1);
  }

  redirectToAddCoursePage = () => {
    const { history } = this.props;
    history.push('/course');
  }

  render() {
    const {
      courses, isFetching, currentPage, totalCourses
    } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        { ' ' }
        <button className="btn btn-primary" type="button">{totalCourses}</button>
        {
          isFetching || !courses ? <Loader />
            : (
              <CourseList
                totalCourses={totalCourses}
                currentPage={currentPage}
                courses={courses}
                handleDelete={this.props.deleteCourse}
                handlePageChange={this.handlePageChange}
              />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = ({
  courses: { allCourses: { courses, currentPage, totalCourses, loadCourses }, isFetching }
}) => ({
  courses,
  isFetching,
  currentPage,
  totalCourses
});


export default connect(mapStateToProps, { deleteCourse, loadCourses })(CoursesPage);