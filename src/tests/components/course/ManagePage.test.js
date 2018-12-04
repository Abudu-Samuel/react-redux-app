/* eslint-disable */
import { ManageCoursePage } from '../../../components/course/ManageCoursePage';

const props = {
  authors: [{}],
  isSaving: false,
  course: [{}],
  actions: {
    saveCourse: jest.fn(() => Promise.resolve()),
  }
};

const state = {
  errors: {},
  title: '',
  category: '',
  authorId: '',
  length: '',
  noEdit: false
}


const event = {
  target: {
    name: 'title',
    value: 'some title'
  },
  preventDefault: jest.fn(),
};


const wrapper = shallow(<ManageCoursePage {...props} />);

describe('renders properly', () => {
  it('render ManageCoursePage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('trigger handleEvent method', () => {
    const instance = wrapper.instance();
    instance.updateCourseState({ target: { name: 'title', value: 'INTRO' } });
    expect(instance.state.title).toEqual('INTRO');
  });

  it('trigger saveCourse', () => {
    wrapper.setState({
      authorId: 'cory-house',
      title: 'Advanced redux',
      category: 'new one',
      length: '23:05'
    })
    const instance = wrapper.instance();
    instance.saveCourse(event);
    expect(props.actions.saveCourse).toBeCalled();
  });
});