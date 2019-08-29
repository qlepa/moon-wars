import React, { Component, Fragment } from "react";

import { Title } from "../Common/TitleStyled/TitleStyled";
import { BattleWrapper } from "./BattleWrapperStyled/BattleWrapperStyled";
import { ScoreBoard } from "./ScoreBoardStyled/ScoreBoardStyled";
import { Table } from "./TableStyled/TableStyled";
import { Result } from "./ResultStyled/ResultStyled";
import { CardItem } from "../CardItem/CardItem";

class BattleGround extends Component {
  // renderCard = id => {
  //   // const { cards } = this.props
  //   return this.props.cards.map(card => {
  //     return <CardItem card={card[0]} />
  //   });
  // };

  render() {
    console.log(this.props.cards);
    return (
      <Fragment>
        <Title>Moon Wars</Title>
        <ScoreBoard>Score</ScoreBoard>
        <BattleWrapper>
          <Table>
            {/* {this.renderCard(1)} */}
            <Result>Who wins?</Result>
            {/* {this.renderCard(2)} */}
          </Table>
        </BattleWrapper>
      </Fragment>
    );
  }
}

export default BattleGround;
