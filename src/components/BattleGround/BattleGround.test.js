import BattleGround from "./BattleGround";

describe("Renders check", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <BattleGround
        cards={[{ name: "Luke", mass: 10 }]}
        clearCards={() => {}}
        fetchCards={() => {}}
        errorFetch={() => {}}
        resetGames={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly detailed", () => {
    const wrapper = render(
      <BattleGround
        cards={[{ name: "Luke", mass: 10 }]}
        clearCards={() => {}}
        fetchCards={() => {}}
        errorFetch={() => {}}
        resetGames={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
