/* eslint-disable */
import CourseListRow from '../../../components/course/CourseListRow';
import { MemoryRouter } from 'react-router-dom';

const props = {
  course: '',
  handleDelete: jest.fn()
};

const config = () => {
  return mount(
    <MemoryRouter>
      <CourseListRow {...props} />
    </MemoryRouter>
  );
};

let mountWrap;

describe('<CourseListRow />', () => {
  it('should render CourseListRow component properly', () => {
    mountWrap = config();
    expect(toJson(mountWrap)).toMatchSnapshot();
  });

  it('should delete course', () => {
    mountWrap = config();
    const buttonToSimulate = mountWrap.find('button').at(0);
    buttonToSimulate.simulate('click')
    expect(props.handleDelete).toBeCalled();
  });
});
