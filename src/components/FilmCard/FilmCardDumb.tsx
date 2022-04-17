import React from "react";
import './film-card.scss'
import {FilmCardImage} from "@components/FilmCard/FilmCardImage";
import {FilmCardFooter} from "@components/FilmCard/FilmCardFooter";

type FilmCardDumbProps = {
  onClick: () => void;
  image: string;
  title: string;
  releaseDate: string;
  mainGenre: string;
}

export const FilmCardDumb: React.FunctionComponent<FilmCardDumbProps> = (
  {
    onClick,
    image,
    title,
    releaseDate,
    mainGenre
  }) => (
  <div className="film-card" onClick={onClick}>
    <FilmCardImage image={image}/>
    <FilmCardFooter title={title} releaseDate={releaseDate} mainGenre={mainGenre}/>
  </div>
)
