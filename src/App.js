import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import {API} from "./config";

class App extends React.Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(results => this.setState({ results: results.results }));
  }

  handleChange = e => {
    let searchTerm = e.target.value;
    this.setState({
      search: e.target.value
    });

    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${searchTerm}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(results => this.setState({ results: results.results }));
  };

  render() {
    const { search, results } = this.state;
    return (
      <>
        <SearchBar handleChange={this.handleChange} search={search} />
        <MovieList movieList={results} />
      </>
    );
  }
}
export default App;
