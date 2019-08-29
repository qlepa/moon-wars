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

  componentDidUpdate(prevProps) {
    if (prevProps.successFetch !== this.props.successFetch) {
      this.renderView();
    }
  }

  setCategory(category) {
    this.setState({
      loading: true
    })
    this.props.fetchCards(category)
    this.props.fetchCards(category)
  };

  //TODO In renderView i need to render BattleGround or Error depend succesFetch. && w8 for data from both function. One Error === error
  renderView() {
    const { successFetch } = this.props
    
    successFetch && this.setState({
      loading: false,
    })
    successFetch && this.props.renderView('BattleGround')
    
  }

  render() {
    console.log(this.props.successFetch)
    return (
      <Fragment>
        <Title>Choose Category</Title>
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
