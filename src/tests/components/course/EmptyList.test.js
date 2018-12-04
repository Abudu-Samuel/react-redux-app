/* eslint-disable */
import EmptyList from '../../../components/course/EmptyList';

describe('<EmptyList />', () => {
  it('render EmptyList component', () => {
    const wrap = shallow(<EmptyList />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});