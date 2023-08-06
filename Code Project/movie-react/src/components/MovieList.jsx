import React, { useState } from "react";
import MovieModal from "./MovieModal";

const MovieList = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={movie.imdbID}
          className="image-container d-flex justify-content-start m-3 "
          //   onClick={() => openMovieModal(movie)}
        >
          <img src={movie.Poster} alt="movie"></img>

          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <props.favouriteComponent />
          </div>
        </div>
      ))}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeMovieModal} />
      )}
    </>
  );
};

export default MovieList;
