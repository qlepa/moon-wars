import React, { Component } from "react";
import punkapi from "../api/punkapi";

class App extends Component {

  // fetchBeers = async (page = 1) => {
  //   const beersPerPage = 20;
  //   const pagination = `page=${page}&per_page=${beersPerPage}`;

  //   const response = await punkapi.get(`?${pagination}`).catch(error => error);

  //   if (response.message) {
  //     this.setState({
  //       errorFetch: response.message
  //     });
  //   } else {
  //     this.setState(state => ({
  //       beers: [...state.beers, ...response.data]
  //     }));
  //   }
  // };

  // fetchBeerDetails(id) {
  //   return punkapi
  //     .get(`/${id}`)
  //     .then(response => response.data)
  //     .catch(error => error);
  // };

  // fetchSimilarBeers(ibu) {
  //   return punkapi
  //     .get(`?ibu_gt=${ibu-2}&ibu_lt=${ibu+2}`)
  //     .then(response => response.data)
  //     .catch(error => error);
  // }

  render() {
    return (
      <div>Siemka</div>
    );
  }
};

export default App;
