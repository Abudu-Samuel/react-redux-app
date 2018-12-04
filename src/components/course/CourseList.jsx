import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import CourseListRow from './CourseListRow';
import EmptyList from './EmptyList';

const CourseList = ({
  courses, handleDelete, currentPage, loadCourses, totalCourses, handlePageChange
}) => (
  <Fragment>
    {
      totalCourses > 0
        ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Length</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {
            courses.map(course => (
              <CourseListRow key={course.id} course={course} handleDelete={handleDelete} />
            ))
          }
              </tbody>
            </table>
            <ReactPaginate
        pageCount={Math.ceil(totalCourses / 2)}
        pageRangeDisplayed={2}
        onPageChange={event => handlePageChange(event)}
        marginPagesDisplayed={1}
        initialPage={currentPage - 1}
        disableInitialCallback
      />
            {' '}

          </div>
        )
        : <EmptyList />
    }


  </Fragment>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;