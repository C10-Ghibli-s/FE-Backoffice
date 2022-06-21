import CardItem from ".";
import renderer from "react-test-renderer";

it("should render card items correctly", () => {
  const tree = renderer.create(<CardItem />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
