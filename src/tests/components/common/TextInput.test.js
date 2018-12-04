/* eslint-disable */
import TextInput from '../../../components/common/TextInput';

const config = (error) => {
  const props = {
    name: '',
    label: '',
    onChange: jest.fn(),
    placeholder: '',
    error,
    defaultValue: ''
  };
  return mount(<TextInput {...props} />);
};

let mountWrap;

describe('<TextInput />', () => {
  it('should render TextInput component', () => {
    mountWrap = config('');
    expect(toJson(mountWrap)).toMatchSnapshot();
  });

  it('should render error tag when an error occurs', () => {
    mountWrap = config('this field is required');
    expect(mountWrap.find('.alert-danger').length).toEqual(1);
    expect(mountWrap.find('.alert-danger').get(0).props.children).toEqual('this field is required');
  });
});