import courseApi from '../api/mockCourseApi';
import {
  LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS,
  SAVE_IN_PROGRESS, FETCH_IN_PROGRESS, DELETE_COURSE_SUCCESS
} from './actionTypes';
import toast from '../helper/toast';

export const loadCoursesSuccess = courses => ({
  type: LOAD_COURSES_SUCCESS,
  courses
});

export const savingCourseLoader = bool => ({
  type: SAVE_IN_PROGRESS,
  bool
});

export const fetchInProgress = bool => ({
  type: FETCH_IN_PROGRESS,
  bool
});

export const createCourseSuccess = course => ({
  type: CREATE_COURSE_SUCCESS,
  course
});

export const updateCourseSuccess = course => ({
  type: UPDATE_COURSE_SUCCESS,
  course
});

export const deleteCourseSuccess = course => ({
  type: DELETE_COURSE_SUCCESS,
  course
});

export const loadCourses = (offset = 1, limit = 2) => (dispatch) => {
  dispatch(fetchInProgress(true));
  courseApi.getAllCourses(offset, limit)
    .then((courses) => {
      dispatch(loadCoursesSuccess(courses));
      dispatch(fetchInProgress(false));
    }).catch((error) => {
      throw (error);
    });
};

export const saveCourse = course => (dispatch) => {
  dispatch(savingCourseLoader(true));
  dispatch(fetchInProgress(true));
  return courseApi.saveCourse(course).then((savedCourse) => {
    if (course.id) {
      dispatch(updateCourseSuccess(savedCourse));
      toast.success('Course is updated successfully');
    } else {
      dispatch(createCourseSuccess(savedCourse));
      toast.success('Course is added successfully');
    }
    dispatch(savingCourseLoader(false));
    dispatch(fetchInProgress(false));
  }).catch((error) => {
    dispatch(savingCourseLoader(false));
    throw (error);
  });
};

export const deleteCourse = course => (dispatch) => {
  courseApi.deleteCourse(course)
    .then(() => dispatch(deleteCourseSuccess(course)))
    .catch((error) => {
      throw (error);
    });
};
