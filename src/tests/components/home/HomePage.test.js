/* eslint-disable */
import HomePage from '../../../components/home/HomePage';

describe('<HomePage />', () => {
  it('render HomePage component correctly', () => {
    const wrap = shallow(<HomePage />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});