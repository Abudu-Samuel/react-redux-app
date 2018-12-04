/* eslint-disable */
import Routes from '../../route';

describe('<Routes />', () => {
  it('render routes in the app', () => {
    const wrap = shallow(<Routes />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});