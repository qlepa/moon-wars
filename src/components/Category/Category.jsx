import React, { Component, Fragment } from "react";

import { CategoryWrapper } from "./CategoryWrapperStyled/CategoryWrapperStyled";
import { Title } from "../Common/TitleStyled/TitleStyled";
import { CategoryItem } from "./CategoryItemStyled/CategoryItemStyled";
import { Loading } from "../Common/LoadingStyled/LoadingStyled";

class Category extends Component {
  state = {
    category: null,
    loading: false,
  };

  setCategory(category) {
    this.setState({
      loading: true
    })
    this.props.fetchCards(category)
    this.props.fetchCards(category)
    this.props.renderView('BattleGround')
  };

  render() {
    return (
      <Fragment>
        <Title>Choose Category</Title>
        <Loading />
        {this.state.loading && <Loading />}
        <CategoryWrapper>
          <CategoryItem
            img={"/static/images/mill.png"}
            onClick={() => this.setCategory("starships")}
          />
          <CategoryItem
            img={"/static/images/luke.png"}
            onClick={() => this.setCategory("people")}
          />
        </CategoryWrapper>
      </Fragment>
    );
  }
}

export default Category;
