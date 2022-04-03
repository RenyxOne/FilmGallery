import React from 'react'
import {useDispatch} from "react-redux";
import {FilmCardProps} from "@interfaces/interfaces";
import {changeScreen} from "@actions/changeScreen";
import {Screen} from "@enums/enum";
import {currentFilm} from "@actions/currentFilm";
import './_film-card.scss'

const FilmCard = (props: FilmCardProps) => {
  const dispatch = useDispatch();
  const handleScreenChange = () => {
    dispatch(changeScreen(Screen.Film));
    dispatch(currentFilm(props));
  };

  return (
    <>
      <div className="film-card" onClick={handleScreenChange}>
        <div className="film-card__image-container">
          <img
            className="film-card__image"
            src={props.poster_path}
            alt="Film Poster"
          />
          <div className="film-card__title-container">
            <div className="film-card__title">
              <p>{props.title}</p>
            </div>
            <div className="film-card__release-date">
              <p>{props.release_date}</p>
            </div>
            <div className="film-card__genre">
              <p>{props.genres}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

FilmCard.defaultProps = {
  title: 'title',
  release_date: 'release date',
  genre: 'genre',
};

export { FilmCard }
