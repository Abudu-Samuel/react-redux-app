/* eslint-disable */
import Header from '../../../components/common/Header';

describe('<Header />', () => {
  it('render Header component', () => {
    const wrap = shallow(<Header />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});