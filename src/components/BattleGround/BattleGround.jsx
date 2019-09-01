import React, { Component, Fragment } from "react";

import { Title } from "../Common/TitleStyled/TitleStyled";
import { BattleWrapper } from "./BattleWrapperStyled/BattleWrapperStyled";
import { ScoreBoard } from "./ScoreBoardStyled/ScoreBoardStyled";
import { Table } from "./TableStyled/TableStyled";
import { Result } from "./ResultStyled/ResultStyled";
import { Button } from "@material-ui/core";
import { Loading } from "../Common/LoadingStyled/LoadingStyled";
import CardItem from "../CardItem/CardItem";

class BattleGround extends Component {
  state = {
    atributes: [],
    category: null,
    loading: false
  };

  componentDidMount() {
    this.setAtributes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({
        atributes: []
      })
      this.setAtributes();
    }
  }

  renderCard = () => {
    const { cards } = this.props;
    console.log({ cards });
    return cards.map((card, index) => {
      return <CardItem card={card} key={index} />;
    });
  };

  setAtributes = () => {
    const { cards } = this.props;
    return cards.map(atr => {
      this.setState(state => ({
        atributes: [...state.atributes, parseInt(atr.mass || atr.crew)],
        category: atr.mass ? "people" : "starships"
      }));
    });
  };

  checkWhoWins = () => {
    const { atributes } = this.state;

    if (atributes[0] > atributes[1]) {
      return <h2>Wygrał Player One</h2>;
    } else if (atributes[0] < atributes[1]) {
      return <h2>Wygrał Player Two</h2>;
    } else {
      return <h2>Remis</h2>;
    }
  };

  playAgain() {
    this.setState({
      loading: true
    });
    this.props.clearCards();
    this.props.fetchCards(this.state.category);
    this.props.fetchCards(this.state.category);
  }


  render() {
    console.log("Atributen", this.state.atributes);
    return (
      <Fragment>
        <Title>Moon Wars</Title>
        <ScoreBoard>Score</ScoreBoard>
        <BattleWrapper>
          <Table>{this.renderCard()}</Table>
          <Result>{this.state.atributes.length && this.checkWhoWins()}</Result>
          <Button onClick={() => this.playAgain()}>PLAY AGAIN</Button>
        </BattleWrapper>
        {this.state.loading && <Loading />}
      </Fragment>
    );
  }
}

export default BattleGround;
