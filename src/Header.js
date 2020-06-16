import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    query: "",
    link: "",
  };

  updateQuery = e => {
    this.setState({query: e.target.value});
    this.props.queryValue(e.target.value);
  };

  setLink = link => {
    this.setState({link});
  };
  
  // When click on the different link, the search results display differently.
  displaySearchResults = linkstring => {
    let movies;
    if (linkstring === 'myList') {
       movies = this.props.movies.filter(movie => movie.my_list);
    } else {
       movies = this.props.movies;
    }
    return this.state.query !== '' ?  `Found ${movies.length} movies with the query "${this.state.query}"` : "";
  };

  render = () => {
    return (
      <header className="header">
        <Link to="/" onClick={() => this.setLink("root")}>
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li><Link to="/myList" onClick={() => this.setLink("myList")}>My List</Link></li>
            </ul>
          </nav>
        </div>
        <form id="search" className="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" 
            placeholder="Search for a title..." 
            value={this.state.query} 
            onChange={this.updateQuery}
            />
          <div className="searchResults">{this.displaySearchResults(this.state.link)}</div>
        </form>
      </header>
    );
  };
}

export default Header;