import React, { Component, Fragment } from "react";

import { CategoryWrapper } from "./CategoryWrapperStyled/CategoryWrapperStyled";
import { Title } from "../Common/TitleStyled/TitleStyled";
import { CategoryItem } from "./CategoryItemStyled/CategoryItemStyled";

class Category extends Component {
  state = {
    category: null
  };

  setCategory(category) {
    this.props.fetchCards(category)
  };

  render() {
    return (
      <Fragment>
        <Title>Choose Category</Title>
        <CategoryWrapper>
          <CategoryItem
            img={"/static/images/mill.png"}
            onClick={() => this.setCategory("starship")}
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
