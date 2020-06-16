import React from 'react';
import * as MovieAPI from './MovieAPI';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Genre from './Genre';

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
    query: "",
  };

  componentDidMount = () => {

    // Get all movies from db.
    MovieAPI.getAll().then(movies => this.setState({movies}));
    
    // Get genres from db, and sort in alphabetical order.
    MovieAPI.genres().then(result => 
      this.setState({genres: result.sort((a, b) =>  a.name.localeCompare(b.name))})
      );
  };

  queryValue = query => {
    this.setState({query})
  };

  searchMovies = query => {
    if (query === "") {

      // When the query value is empty, search movies equal all movies.
      return this.state.movies;
    } else {

      // Filter the movies according to the query string.
      return this.state.movies.filter(movie => (
        movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        movie.overview.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      ));
    }
  };

  // Classify the movies by genres.
  buildMovieGenreObject = (movies, genres) => {
    const movieGenres = {}  
  
    genres.forEach(genre => {
      movies.forEach(movie => {
        if (movie.genre_ids.includes(genre.id)) {
          if(movieGenres[genre.name] === undefined) {
            movieGenres[genre.name] = [movie];
          } else {
            movieGenres[genre.name].push(movie);
          }
        }
      })
    });
  
    return movieGenres;
  };

  // Toggle to myList.
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
    const movies = this.searchMovies(this.state.query);
    const moviesByGenres = this.buildMovieGenreObject(movies, this.state.genres);
    const genres = Object.keys(moviesByGenres);

    return (
      <>
        <Header movies={movies} queryValue={this.queryValue}/>
        <Switch>
          <Route exact path="/myList">
            <Genre genre={"My List"} listToggle={this.listToggle} movies={movies.filter(movieEle => movieEle.my_list)}/>
          </Route>
          <Route exact path="/">
            {genres.map(genre =>  
              <Genre key={genre} listToggle={this.listToggle} genre={genre} movies={moviesByGenres[genre]}/>
            )}
          </Route>
        </Switch>

      </>
    );
  };
}

export default App;