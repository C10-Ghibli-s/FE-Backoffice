import Modules from '../modules';
import renderer from 'react-test-renderer';

it('should render modules card correctly', () => {
  const tree = renderer
    .create(
      <Modules>
        <h1>Modules</h1>
        <section></section>
      </Modules>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
})