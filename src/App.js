import React from 'react';
import * as MovieAPI from './MovieAPI';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Genre from './Genre';

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
  };

  componentDidMount = () => {
    MovieAPI.getAll().then(movies => this.setState({movies}));
    MovieAPI.genres().then(result => 
      this.setState({genres: result.sort((a, b) =>  a.name.localeCompare(b.name))})
      );
  };

  searchMovies = query => {
    if (query ==='') {

      // When the query value is empty, the movies are updated according to the database.
      MovieAPI.getAll().then(movies => this.setState({movies}));
    } else {

      // Get the movies from database with the query string, and update the state, 
      // sothat when click backspace the movies can be also updated. 
      MovieAPI.getAll().then(movies => this.setState({movies: movies.filter(movieEle => (
        movieEle.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        movieEle.overview.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      ))}));
    }
  };

  // Filter the movies by genre.
  filterMovies = id => {
    return this.state.movies.filter(movie => movie.genre_ids.includes(id));
  };

  listToggle = movie => {

    // Update the database according to my_list.
    movie.my_list ? MovieAPI.removeFromList(movie) : MovieAPI.addToList(movie);

    // Set state of movies according to my_list.
    this.setState(prevState => {
      const movieIndex = prevState.movies.findIndex(movieEle => movieEle === movie);
      const movieClone = {...prevState.movies[movieIndex]};
      movieClone.my_list = !movieClone.my_list;
      const newMoviesState = [...prevState.movies];
      newMoviesState.splice(movieIndex, 1, movieClone);
      return {movies: newMoviesState};
    });
  };

  render = () => {
    return (
      <>
        <Header movies={this.state.movies} searchMovies={this.searchMovies}/>
        <Switch>
          <Route exact path="/myList">
            <Genre genre={"My List"} listToggle={this.listToggle} movies={this.state.movies.filter(movieEle => movieEle.my_list)}/>
          </Route>
          <Route exact path="/">
            {this.state.genres.map(genre => this.filterMovies(genre.id).length > 0 ? 
              <Genre key={genre.id} listToggle={this.listToggle} genre={genre.name} movies={this.filterMovies(genre.id)}/>
              : "")}
          </Route>
        </Switch>

      </>
    );
  };
}

export default App;
