import { MovieModal } from ".";
import renderer from "react-test-renderer";

it("should render modal elements correctly", () => {
  const tree = renderer
    .create(<MovieModal openMovieModal={false} SetOpenMovieModal={false} />)
    .toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
