import React from 'react'
import MovieListEntry from './MovieListEntry'

const MovieList = (props) => (
  <div className="video-list">
    {props.movies.map (movie=>
      <MovieListEntry key={movie.title} movie={movie}/>
    )}
  </div>
);

export default MovieList;
