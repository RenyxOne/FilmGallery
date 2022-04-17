import React from "react";

type FilmCardFooterProps = {
  title: string;
  releaseDate: string;
  mainGenre: string;
}

export const FilmCardFooter: React.FC<FilmCardFooterProps> = (
  {
    title,
    releaseDate,
    mainGenre
  }) => (
  <div className="film-card__title-container">
    <div className="film-card__title">
      <p>{title}</p>
    </div>
    <div className="film-card__release-date">
      <p>{releaseDate}</p>
    </div>
    <div className="film-card__genre">
      <p>{mainGenre}</p>
    </div>
  </div>
);
