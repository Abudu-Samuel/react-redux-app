/* eslint-disable */
import AboutPage from '../../../components/about/AboutPage';

describe('<AboutPage />', () => {
  it('render routes in the app', () => {
    const wrap = shallow(<AboutPage />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});