import React, { PureComponent, Fragment } from 'react';

import { Title } from '../Common/TitleStyled/TitleStyled';
import { BattleWrapper } from './BattleWrapperStyled/BattleWrapperStyled';
import { ScoreBoard } from './ScoreBoardStyled/ScoreBoardStyled';
import { Table } from './TableStyled/TableStyled';
import Card from '../Card/Card';
import { Result } from './ResultStyled/ResultStyled';

class BattleGround extends PureComponent {
    render() {
        return (
          <Fragment>
            <Title>Moon Wars</Title>
            <BattleWrapper>
              <ScoreBoard>Score</ScoreBoard>
              <Table>
                <Card />
                <Result>Who wins?</Result>
                <Card />
              </Table>
            </BattleWrapper>
          </Fragment>
        );
    }
};

export default BattleGround;