import React from 'react';
import {Screen} from "../enums/enum";

interface FilmData {
  id?: number;
  title: string;
  tagline?: string;
  vote_average: number;
  vote_count?: number;
  release_date: string;
  poster_path: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  genres: string[];
  runtime?: number;
}
interface FilmCardProps extends Omit<FilmData, 'genres'> {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  genres: string;
}

interface IContentProps {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  filmsData: {films: FilmData[]};
}

interface IFilmListProps {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  filmsData: FilmData[];
}

interface MyState {
  screen: Screen;
}

type Action = {
  type: string,
  info: unknown
}

export {
  FilmData,
  IContentProps,
  MyState,
  FilmCardProps,
  IFilmListProps,
  Action
};
