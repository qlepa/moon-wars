import Category from "./Category";

it("renders correctly", () => {
  const wrapper = shallow(
    <Category
      fetchCards={() => {}}
      finishFetch={() => {}}
      renderView={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

