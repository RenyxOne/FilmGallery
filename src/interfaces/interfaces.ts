import React from 'react';
import {Screen} from "../enums/enum";

type FilmData = {
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
type FilmCardProps = Omit<FilmData, 'genres'> & {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  genres: string;
  film: FilmData;
}

type IContentProps = {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  filmsData: {films: FilmData[]};
}

type FilmListProps = {
  filmsData: FilmData[];
}

type MyState = {
  screen: Screen;
}

export {
  FilmData,
  IContentProps,
  MyState,
  FilmCardProps,
  FilmListProps,
};
