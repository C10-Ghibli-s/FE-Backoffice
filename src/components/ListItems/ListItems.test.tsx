import ListItems from ".";
import renderer from "react-test-renderer";

it("should render list of items correctly", () => {
  const tree = renderer.create(<ListItems />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
