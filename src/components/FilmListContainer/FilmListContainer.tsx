import React from "react";
import {NoMatches} from "@components/NoMatches";
import {FilmData} from "@interfaces/interfaces";
import {CardsList} from "@components/CardsList";
import {FilmCardFactory} from "@components/FilmCard";

type FilmListContainerProps = {
  filmsData: {films: FilmData[]}
}

const FilmListContainer: React.FC<FilmListContainerProps> = ({filmsData}) => (
  filmsData ?
    (
      <CardsList>
        <FilmCardFactory filmsData={filmsData.films}/>
      </CardsList>
    ) : (
      <NoMatches/>
    )
);

export {FilmListContainer}
