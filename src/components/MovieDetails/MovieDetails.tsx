import React from "react";
import {useSelector} from "react-redux";
import {State} from "@reducers/rootReducer";
import './movie-details.scss'
import {MovieDetailsDumb} from "@components/MovieDetails/MovieDetailsDumb";

const MovieDetails = () => {
  const currentFilm = useSelector((state: State) => state.currentFilm);
  const genre = currentFilm? currentFilm.genres : '';
  const genreString = Array.isArray(genre) ? genre.join(', ') : genre;
  return currentFilm ?
    <MovieDetailsDumb
      image={currentFilm.poster_path}
      title={currentFilm.title}
      score={currentFilm.vote_average}
      genres={genreString}
      releaseDate={currentFilm.release_date}
      duration={currentFilm.runtime || 0}
      description={currentFilm.overview || ''}/> : <></>;
}

export {MovieDetails}
