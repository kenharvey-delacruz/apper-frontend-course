import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="movie-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <img src={movie.Poster} alt="movie-poster" />
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieModal;
