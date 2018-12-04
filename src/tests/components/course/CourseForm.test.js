/* eslint-disable */
import CourseForm from '../../../components/course/CourseForm';

const config = (isSaving = false) => {
  const props = {
    allAuthors: [{}],
    onSave: jest.fn(),
    onChange: jest.fn(),
    errors: {},
    isSaving,
    courseToModify: [{}]
  };
  return {
    wrap: mount(<CourseForm {...props} />),
    props
  }
};

describe('<CourseForm />', () => {
  it('should renderCourseForm component', () => {
    const { wrap } = config();
    expect(toJson(wrap)).toMatchSnapshot();
  });

  it('should renderCourseForm component', () => {
    const { wrap } = config(true);
    expect(wrap.find('input').at(3).props().defaultValue).toBe('saving');
  });
});