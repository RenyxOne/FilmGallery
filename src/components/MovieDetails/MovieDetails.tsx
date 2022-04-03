import React from "react";
import {useSelector} from "react-redux";
import {State} from "@reducers/rootReducer";
import './movie-details.scss'

const MovieDetails = () => {
  const currentFilm = useSelector((state: State) => state.currentFilm);
  return (
    <div className="movie-details-wrapper">
      <div className="movie-details__image-container">
        <img
          className="movie-details__image"
          src={currentFilm.poster_path}
          alt="Header poster image"
        />
      </div>
      <div className="movie-details__info">
        <div>
          <h2 className="main-title">
            {currentFilm.title}
          </h2>
          <button className="movie-details__score">
            {currentFilm.vote_average}
          </button>
        </div>
        <div className="movie-details__genres">
          Genres: {currentFilm.genres}
        </div>
        <div className="movie-details__text">
          Release Data: {currentFilm.release_date.substring(0, 4)}
        </div>
        <div className="movie-details__text">
          Duration: {currentFilm.runtime} min
        </div>
        <div className="movie-details__description">
          <p>{currentFilm.overview}</p>
        </div>
      </div>
    </div>
  );
}

export {MovieDetails}
