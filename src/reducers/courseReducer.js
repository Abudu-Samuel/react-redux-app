import {
  LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS,
  SAVE_IN_PROGRESS, FETCH_IN_PROGRESS, DELETE_COURSE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  allCourses: {
    courses: []
  },
  isSaving: false,
  isFetching: false
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return { ...state, allCourses: action.courses };

    case SAVE_IN_PROGRESS:
      return { ...state, isSaving: action.bool };

    case FETCH_IN_PROGRESS:
      return { ...state, isFetching: action.bool };

    case CREATE_COURSE_SUCCESS:
      return { ...state, isSaving: false };

    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        allCourses: {
          ...state.allCourses,
          courses: [...state.allCourses.courses.filter(course => course.id !== action.course.id), action.course]
        }
      };

    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        allCourses: {
          ...state.allCourses,
          courses: state.allCourses.courses.filter(course => course.id !== action.course.id),
          totalCourses: state.allCourses.totalCourses - 1
        }
      };

    default:
      return state;
  }
};

export default courseReducer;