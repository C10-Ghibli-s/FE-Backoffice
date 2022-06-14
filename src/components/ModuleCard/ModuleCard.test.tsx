import { ModuleCard } from ".";
import renderer from "react-test-renderer";

it("should render a Module Card correctly", () => {
  const tree = renderer
    .create(
      <ModuleCard
        title={""}
        description={""}
        icons={""}
        goToSearchPage={""}
        goToCreatePage={""}
      >
        <>
          <section onClick={[Function]}>
            <span></span>
            <h2></h2>
            <p></p>
          </section>
        </>
      </ModuleCard>
    )
    .toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
