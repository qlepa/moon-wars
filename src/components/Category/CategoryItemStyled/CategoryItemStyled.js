import styled from "styled-components";

export const CategoryItem = styled.div`
  background-image: url(${props => props.img});
  margin: 0 0 15px;
  /* text-align: center; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 50%;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
