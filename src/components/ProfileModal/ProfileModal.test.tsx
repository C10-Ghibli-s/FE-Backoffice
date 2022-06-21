import { ProfileModal } from ".";
import renderer from "react-test-renderer";

it("should render modal elements correctly", () => {
  const tree = renderer
    .create(
      <ProfileModal openModal={false} setOpenModal={false}/>
    )
    .toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
