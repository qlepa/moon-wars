import React, { Component } from "react";
import swapi from "../api/swapi";

import Category from "./Category/Category";
import BattleGround from "./BattleGround/BattleGround";
import { Wrapper } from "./Common/WrapperStyled/WrapperStyled";

class App extends Component {
  state = {
    errorFetch: null,
    successFetch: false,
    view: "Category",
    cards: []
  };

  fetchCategoryCounter = category => {
    return swapi
      .get(`/${category}`)
      .then(response => response.data.count)
      .catch(error => error);
  };

  //const itemsPerPage = 10
  //const howManyPages = counter/itemsPerPage
  //const rest = counter % 10
  // const page = Math.floor(Math.random() * howManyPages) + 1
  // const itemIndex = page === howManyPages ? rest : itemsPerPage
  // const randomItem = Math.floor(Math.random() * itemIndex-1)

  // const response = await swapi.get(`/${category}/&page=${page}`)

  // const item = response.data[itemIndex]

  //Zakładamy, że na stronie jest 10 itemów, sprawdzamy ile jest stron dla wybranej kategorii. ZNajdujemy modulo, które jest liczbą itemów na ostatniej stronie,
  //losujemy numer strony a zaraz potem losujemy index itemu na tej stronie i go zwracamy.

  fetchCards = async category => {
    const counter = await this.fetchCategoryCounter(category);
    const itemsPerPage = 10;
    const rest = counter % 10;
    //TODO Zaokrągla się nieprawidłowo. Czasem 10 strona wpada
    const howManyPages = rest
      ? counter / itemsPerPage.toFixed(0) + 1
      : counter / itemsPerPage.toFixed(0);
    const page = Math.floor(Math.random() * howManyPages) + 1;
    // const link = `/${category}/?page=${page}`;
    const link = `/${category}/?page=${3}`;

    const itemIndex = page === howManyPages ? rest : itemsPerPage;
    //Źle liczy index, czasami wpada 10
    const randomItem = Math.floor(Math.random() * itemIndex);
    const response = await swapi.get(`${link}`).catch(error => error);
    console.log({ counter });
    console.log({ rest });
    console.log({ howManyPages });
    console.log({ page });
    console.log({ link });
    console.log({ itemIndex });
    console.log({ randomItem });
    console.log({ response });
    if (response.message) {
      this.setState({
        errorFetch: response.message
      });
    } else {
      //TODO clear array when runs again
      // console.log({ counter });
      this.setState(state => ({
        cards: [...state.cards, response.data.results[randomItem]]
        // cards: [...state.cards, response.data.results[3]],

        // successFetch: true,
      }));
      if (this.state.cards.length === 2) {
        this.setState({
          successFetch: true
        });
      }
    }
  };

  renderView = view => {
    this.setState({
      view: view
    });
  };

  clearCards = () => {
    this.setState({
      cards: []
    })
  }

  render() {
    // console.log(this.state.cards);
    switch (this.state.view) {
      case "BattleGround":
        return (
          <Wrapper>
            <BattleGround
              fetchCards={this.fetchCards}
              cards={this.state.cards}
              clearCards={this.clearCards}
            />
          </Wrapper>
        );
      default:
        return (
          <Wrapper>
            <Category
              fetchCards={this.fetchCards}
              renderView={this.renderView}
              successFetch={this.state.successFetch}
            />
          </Wrapper>
        );
    }
  }
}

export default App;
