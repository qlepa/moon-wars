import swapi from './api/swapi'

export default category => {
    return swapi
      .get(`/${category}`)
      .then(response => response.data.count)
      .catch(error => error);
  };