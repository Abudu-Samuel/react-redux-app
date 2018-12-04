/* eslint-disable */
import SelectInput from '../../../components/common/SelectInput';

const config = (error) => {
  const props = {
    name: '',
    label: '',
    onChange: jest.fn(),
    defaultOption: '',
    defaultValue: '',
    error,
    options: [{ value: '', text: '' }]
  };
  return mount(<SelectInput {...props} />);
};

let mountWrap;

describe('<SelectInput />', () => {
  it('should render SelectInput component', () => {
    mountWrap = config('');
    expect(toJson(mountWrap)).toMatchSnapshot();
  });

  it('should render error tag when an error occurs', () => {
    mountWrap = config('select an author');
    expect(mountWrap.find('.alert-danger').length).toEqual(1);
    expect(mountWrap.find('.alert-danger').get(0).props.children).toEqual('select an author');
  });
});