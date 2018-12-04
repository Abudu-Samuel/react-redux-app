/* eslint-disable */
import { CoursesPage } from '../../../components/course/CoursesPage';

const props = {
  loadCourses: jest.fn(),
  totalCourses: 5,
  currentPage: 1,
  courses: [],
  history: {
    push: jest.fn(),
  }
}

const wrapper = shallow(<CoursesPage {...props} />);

describe('', () => {
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches loadCourses action when handleChange method is called', () => {
    const handleChangeMethod = wrapper.instance().handlePageChange
    handleChangeMethod({ selected: 1 });

    expect(props.loadCourses).toBeCalled();
  });

  it('dispatches redirectToAddCoursePage', () => {
    const redirectPage = wrapper.instance().redirectToAddCoursePage;

    redirectPage()

    expect(props.history.push).toBeCalled();
  });

  it('loads next page if courses on current Page is the first', () => {
    wrapper.setProps({
      ...wrapper.props(),
      courses: [],
      currentPage: 1
    })
    expect(props.loadCourses).toBeCalledWith(1)

    wrapper.setProps({
      ...wrapper.props(),
      courses: [],
      currentPage: 2
    })
    expect(props.loadCourses).toBeCalledWith(2)
  });
});