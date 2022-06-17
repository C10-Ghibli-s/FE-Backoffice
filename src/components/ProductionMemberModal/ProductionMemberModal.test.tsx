import { ProductionMemberModal } from ".";
import renderer from "react-test-renderer";

it("should render modal elements correctly", () => {
  const tree = renderer
    .create(
      <ProductionMemberModal
        openProductionModal={false}
        setOpenProductionModal={false}
      />
    )
    .toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
