import React from 'react';
import Movie from './Movie';

export default function Genre(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{props.genre}</h1>
        <div className="titles-wrapper">
          {props.movies.map(movie => <Movie listToggle={props.listToggle} key={movie.id} movie={movie}/>)}
        </div>
      </div>
    </div>
  );
}