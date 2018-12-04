/* eslint-disable */
import CourseList from '../../../components/course/CourseList';

const config = () => {
  const props = {
    courses: [{ id: '1', course: '' }],
    handleDelete: '',
    currentPage: '',
    totalCourses: '',
    handlePageChange: jest.fn()
  };
  return mount(<CourseList {...props} />);
};

let mountWrap;

describe('<CourseList />', () => {
  it('should render CourseList component', () => {
    mountWrap = config();
    expect(toJson(mountWrap)).toMatchSnapshot();
  });
});