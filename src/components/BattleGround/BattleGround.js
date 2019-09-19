import React, { PureComponent, Fragment } from "react";

import { Title } from "../Common/TitleStyled/TitleStyled";
import { BattleWrapper } from "./BattleWrapperStyled/BattleWrapperStyled";
import { Table } from "./TableStyled/TableStyled";
import { Header } from "../Common/HeaderStyled/HeaderStyled";
import { Result } from "./ResultStyled/ResultStyled";
import { Button } from "../Common/ButtonStyled/ButtonStyled";
import { Loading } from "../Common/LoadingStyled/LoadingStyled";
import { ErrorPage } from "../Common/ErrorPageStyled/ErrorPageStyled";
import CardItem from "../CardItem/CardItem";

class BattleGround extends PureComponent {
  state = {
    atributes: [],
    category: null,
    loading: false,
  };

  componentDidMount() {
    this.setAtributes();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({
        atributes: []
      });
      this.setAtributes();
    };
  };

  renderCard = () => {
    const { cards } = this.props;

    return cards.map((card, key) => {
      return <CardItem card={card} key={key} id={key+1} />;
    });
  };

  setAtributes = () => {
    const { cards } = this.props;
    cards.map(atr => {
      this.setState(state => ({
        atributes: [...state.atributes, atr.mass || atr.crew],
        category: atr.mass ? "people" : "starships"
      }))
    });
  };

  checkWhoWins = () => {
    const { atributes } = this.state;

    if (atributes[0] === 'unknown' || atributes[1] === 'unknown') {
      return <h2>Atribute unknown. Play again</h2>;
    } else if (atributes[0] > atributes[1]) {
      return <h2>Player 1 Wins!</h2>;
    } else if (atributes[0] < atributes[1]) {
      return <h2>Player 2 Wins!</h2>;
    } else if (atributes[0] === 'unknown' || atributes[1] === 'unknown') {
      return <h2>Atribute unknown. Play again</h2>;
    } else {
      return <h2>Draw!</h2>
    };
  };

  playAgain() {
    this.setState({
      loading: true
    });
    this.props.clearCards();
    this.props.fetchCards(this.state.category);
    this.props.fetchCards(this.state.category).then(() => this.closeLoading()) ;
  };

  closeLoading() {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <Fragment>
        <Header>
          <Title>Moon Wars</Title>
          {this.props.errorFetch && (
            <ErrorPage>{this.props.errorFetch}</ErrorPage>
          )}
        </Header>
        <BattleWrapper>
          <Table>{this.renderCard()}</Table>
          <Result>
            {this.state.atributes.length === 2 && this.checkWhoWins()}
          </Result>
          <Button onClick={() => this.playAgain()}>PLAY AGAIN</Button>
          <Button onClick={() => this.props.resetGame()}>Go Back</Button>
        </BattleWrapper>
        {this.state.loading && <Loading />}
      </Fragment>
    );
  };
};

export default BattleGround;
