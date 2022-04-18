import React from 'react'
import {useDispatch} from "react-redux";
import {FilmData} from "@interfaces/interfaces";
import {ChangeScreenAction} from "@actions/ChangeScreenAction";
import {ScreenFilm} from "@enums/enum";
import {CurrentFilmAction} from "@actions/CurrentFilmAction";
import {FilmCardDumb} from "./FilmCardDumb";

type FilmCardProps = {
  image: string;
  title: string;
  releaseDate: string;
  mainGenre: string;
  filmInfo: FilmData
}

export const FilmCard: React.FC<FilmCardProps> = (
  {
    image,
    title,
    releaseDate,
    mainGenre,
    filmInfo
  }) => {


  const dispatch = useDispatch();
  const handleScreenChange = () => {
    dispatch(ChangeScreenAction(ScreenFilm));
    dispatch(CurrentFilmAction(filmInfo));
  };

  return <FilmCardDumb
    onClick={handleScreenChange}
    image={image}
    title={title}
    releaseDate={releaseDate}
    mainGenre={mainGenre}
  />;
}
