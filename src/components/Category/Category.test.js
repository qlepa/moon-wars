import Category from "./Category";
import moxios from "moxios";
import swapi from "../../Services/api/swapi";

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

jest.mock("../../Services/fetchCategoryCounter");

describe("Check Axios", () => {
  beforeEach(() => {
    moxios.install(swapi);
  });

  afterEach(() => {
    moxios.uninstall(swapi);
  });

  it("fetches category counter from swapi", done => {
    const wrapper = shallow(<Category />);

    setTimeout(() => {
      wrapper.update();

      const state = wrapper.instance().state;

      expect(state.loading).toBeFalsy();

      done();
    });
  });
});

