import * as types from '../../actions/actionTypes';
import courseReducer from '../../reducers/courseReducer';
import mockedData from '../__mocks__/courseMock';


const initialState = {
  allCourses: {
    courses: []
  },
  isSaving: false,
  isFetching: false
};

describe('Course Reducer tests', () => {
  describe('Return state', () => {
    it('should return the initial state of course reducer', (done) => {
      expect(courseReducer(undefined, {})).toEqual(initialState);
      done();
    });
  });

  describe('Load courses', () => {
    it('should indicate that data is being fetched by setting loader value to true', (done) => {
      const action = {
        type: types.FETCH_IN_PROGRESS,
        bool: true
      };

      const currentState = courseReducer(initialState, action);
      expect(currentState.isFetching).toEqual(true);
      expect(currentState.isSaving).toEqual(false);
      expect(currentState.allCourses).toEqual({ courses: [] });
      done();
    });

    it('should load all courses when data are ready', (done) => {
      const { courses } = mockedData;
      const action = {
        type: types.LOAD_COURSES_SUCCESS,
        courses
      };

      const currentState = courseReducer(initialState, action);
      expect(currentState.isFetching).toEqual(false);
      expect(currentState.allCourses).toEqual(courses);
      done();
    });
  });

  describe('save and update courses', () => {
    it('it should indicate that data is being saved by setting status to saving', (done) => {
      const action = {
        type: types.SAVE_IN_PROGRESS,
        bool: true
      };

      const currentState = courseReducer(initialState, action);
      expect(currentState.isSaving).toEqual(true);
      done();
    });

    it('should save the course added', (done) => {
      const { courses } = mockedData;
      const action = {
        type: types.CREATE_COURSE_SUCCESS,
        course: courses[0]
      };

      const currentState = courseReducer(initialState, action);
      expect(currentState.isSaving).toEqual(false);
      done();
    });

    it('should update course', (done) => {
      const { courses, updatedCourse } = mockedData;

      const action = {
        type: types.UPDATE_COURSE_SUCCESS,
        course: updatedCourse
      };

      const mockedState = { ...initialState, allCourses: { ...initialState.allCourses, courses } };
      const currentState = courseReducer(mockedState, action);
      expect(currentState.isSaving).toEqual(false);
      done();
    });
  });

  describe('delete courses', () => {
    it('should delete the course', (done) => {
      const { courses } = mockedData;

      const action = {
        type: types.DELETE_COURSE_SUCCESS,
        course: courses[1]
      };
      const mockedState = { ...initialState, allCourses: { ...initialState.allCourses, courses } };
      const currentState = courseReducer(mockedState, action);
      expect(currentState.isSaving).toEqual(false);
      done();
    });
  });
});