/* eslint-disable */
import NotFoundPage from '../../../components/common/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('render routes in the app', () => {
    const wrap = shallow(<NotFoundPage />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});