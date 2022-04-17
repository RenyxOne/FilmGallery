import {FilmData} from "@interfaces/interfaces";
import React from "react";
import {FilmCard} from './FilmCard'

type FilmCardFactoryProps = {
  filmsData: FilmData[];
}
export const FilmCardFactory: React.FC<FilmCardFactoryProps> = ({filmsData}) => (
  <>
    {filmsData.map((filmData) => (
      <FilmCard
        image={filmData.poster_path}
        title={filmData.title}
        mainGenre={filmData.genres[0]}
        releaseDate={filmData.release_date.substring(0, 4)}
        filmInfo={filmData}
        key={filmData.id}
      />
    ))}
  </>);
