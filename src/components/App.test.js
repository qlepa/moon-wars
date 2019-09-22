import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { fetchCards } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("axios call", () => {
  const data = fetchCards("people");
  console.log(data)
})
