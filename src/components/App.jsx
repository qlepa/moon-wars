import React, { Component } from "react";
import swapi from "../api/swapi";

import Category from "./Category/Category";
import BattleGround from './BattleGround/BattleGround';
import { Wrapper } from "./Common/WrapperStyled/WrapperStyled";

class App extends Component {
  state = {
    errorFetch: null,
    view: 'Category',
    cards: []
  };

  fetchCards = async category => {
    const counter = category === "people" ? 87 : 37;
    const randomNum = Math.floor(Math.random() * counter);
    const link = `/${category}/${randomNum}`;
    const response = await swapi.get(`${link}`).catch(error => error);

    if (response.message) {
      this.setState({
        errorFetch: response.message
      });
    } else {
      console.log(response);
      this.setState(state => ({
        cards: [...state.cards, response.data]
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
          <BattleGround fetchCards={this.fetchCards} />
        </Wrapper>
      );
      break;
    default:
      return (
        <Wrapper>
          <Category fetchCards={this.fetchCards} renderView={this.renderView} />
        </Wrapper>
      );
  }
}
}

export default App;
