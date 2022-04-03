import React from "react";
import {NoMatches} from "@components/NoMatches";
import {IContentProps} from "@interfaces/interfaces";
import {FilmList} from "@components/FilmList";

const FilmListContainer = (props: IContentProps) => (
  props.filmsData ?
    (
      <FilmList
        screen={props.screen}
        setScreen={props.setScreen}
        filmsData={props.filmsData?.films}
      />
    ) : (
      <NoMatches/>
    )
);

export {FilmListContainer}
