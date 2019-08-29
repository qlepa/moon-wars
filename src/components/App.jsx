import React, { Component } from "react";
import swapi from "../api/swapi";

import Category from "./Category/Category";
import BattleGround from './BattleGround/BattleGround';
import { Wrapper } from "./Common/WrapperStyled/WrapperStyled";

class App extends Component {
  state = {
    errorFetch: null,
    successFetch: false,
    view: 'Category',
    cards: []
  };

  fetchCards = async category => {
    const counter = category === "people" ? 87 : 37;
    const randomNum = Math.floor(Math.random() * counter) + 1;
    const link = `/${category}/${randomNum}`;
    const response = await swapi.get(`${link}`).catch(error => error);

    if (response.message) {
      this.setState({
        errorFetch: response.message
      });
    } else {
      this.setState(state => ({
        cards: [...state.cards, response.data],
        successFetch: true,
      }));
    }
  };

  renderView = (view) => {
    this.setState({
      view: view,
    })
  };

  render() {
    console.log(this.state.cards)
    switch (this.state.view) {
    case 'BattleGround':
      return (
        <Wrapper>
          <BattleGround fetchCards={this.fetchCards} cards={this.state.cards} />
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <Category fetchCards={this.fetchCards} renderView={this.renderView} successFetch={this.state.successFetch} />
        </Wrapper>
      );
  }
}
}

export default App;
