import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseListRow = ({ course, handleDelete }) => (
  <tr>
    <td><a href={course.watchHref}>Watch</a></td>
    <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
    <td><button onClick={() => handleDelete(course)} className="btn-danger" type="button">Delete</button></td>
  </tr>
);

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
