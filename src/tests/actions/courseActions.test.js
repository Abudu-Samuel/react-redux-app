import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/courseActions';
import mockedData from '../__mocks__/courseMock';
import { replaceAll, courses } from '../../api/mockCourseApi';

const middleware = [thunk];
const storeMock = configMockStore(middleware);

describe('Course actions tests', () => {
  describe('Load all courses based on action', () => {
    it('should load all courses', (done) => {
      const { sortedCourses } = mockedData;
      const action = [
        {
          type: types.FETCH_IN_PROGRESS,
          bool: true
        },
        {
          type: types.LOAD_COURSES_SUCCESS,
          courses: sortedCourses
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: false
        }
      ];

      const store = storeMock({});

      store.dispatch(actions.loadCourses())
        .then(() => {
          expect(store.getActions()).toEqual(action);
          done();
        });
    });
  });

  describe('Save and Update course actions', () => {
    it('should save course', (done) => {
      const { validInput } = mockedData;
      const id = replaceAll(validInput.title, ' ', '-');
      const action = [
        {
          type: types.SAVE_IN_PROGRESS,
          bool: true
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: true
        },
        {
          type: types.CREATE_COURSE_SUCCESS,
          course: {
            ...validInput,
            id,
            watchHref: `http://www.pluralsight.com/courses/${id}`
          }
        },
        {
          type: types.SAVE_IN_PROGRESS,
          bool: false
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: false
        }
      ];

      const store = storeMock({});
      store.dispatch(actions.saveCourse(validInput))
        .then(() => {
          expect(store.getActions()).toEqual(action);
          done();
        });
    });

    it('should not create a course when invalid inputs are used', () => {
      const { invalidInput } = mockedData;
      const action = [
        {
          type: types.SAVE_IN_PROGRESS,
          bool: true
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: true
        },
        {
          type: types.SAVE_IN_PROGRESS,
          bool: false
        }
      ];

      const store = storeMock({});
      store.dispatch(actions.saveCourse(invalidInput))
        .then(() => {
          expect(store.getActions()).toEqual(action);
        });
    });

    it('should update course', (done) => {
      const action = [
        {
          type: types.SAVE_IN_PROGRESS,
          bool: true
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: true
        },
        {
          type: types.UPDATE_COURSE_SUCCESS,
          course: courses[0]
        },
        {
          type: types.SAVE_IN_PROGRESS,
          bool: false
        },
        {
          type: types.FETCH_IN_PROGRESS,
          bool: false
        }
      ];

      const store = storeMock({});
      store.dispatch(actions.saveCourse(courses[0]))
        .then(() => {
          expect(store.getActions()).toEqual(action);
          done();
        });
    });
  });

  describe('Delete course', () => {
    it('should delete course', (done) => {
      const action = {
        type: types.DELETE_COURSE_SUCCESS,
        course: courses[0].id
      };

      const store = storeMock({});
      store.dispatch(actions.deleteCourse(courses[0].id))
        .then(() => {
          expect(store.getActions()).toEqual(action);
          done();
        });
    });
  });
});