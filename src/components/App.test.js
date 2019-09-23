import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import moxios from "moxios";
import swapi from "../api/swapi";
import { fetchCategoryCounter } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

describe("Check Axios", () => {
  beforeEach(() => {
    moxios.install(swapi);
  });

  afterEach(() => {
    moxios.uninstall(swapi);
  });

  // it('fetches the posts of a given user', (done) => {
  //   const category = "people"
  //   const expectedPosts = ['Post1', 'Post2']

  //   moxios.stubRequest(`/${category}`, {
  //     status: 200,
  //     response: expectedPosts
  //   })

  //   const onFulfilled = sinon.spy()
  //   fetchCategoryCounter("people").then(onFulfilled)

  //   moxios.wait(() => {
  //     expect(onFulfilled.getCall(0).args[0].data).toBe(expectedPosts)
  //     done()
  //   })
  // })
  it("test get", async () => {
    const expectedPosts = 87;
    const pytam = fetchCategoryCounter("people")

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedPosts }); //mocked response
    });

    const result = await pytam();
    console.log(result); 
    expect(result).toEqual(expectedPosts);
  });
});
