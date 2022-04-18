import React from "react";
import {BackButton} from "@components/BackButton";
import {MySmartImage} from "@components/MySmartImage/MySmartImage";

type MovieDetailsDumbProps = {
  image: string;
  title: string;
  score: number;
  genres: string;
  releaseDate: string;
  duration: number;
  description: string;
}

export const MovieDetailsDumb: React.FC<MovieDetailsDumbProps> = (
  {image, title, score, genres, releaseDate, duration, description}
) => <>
  <div className="movie-details__back-btn">
    <BackButton/>
  </div>
  <div className="movie-details-wrapper">
    <div className="movie-details__image-container">
      <MySmartImage
        className="movie-details__image"
        src={image}
        alt="Header poster image"
      />
    </div>
    <div className="movie-details__info">
      <div>
        <h2 className="main-title">
          {title}
        </h2>
        <button className="movie-details__score">
          {score}
        </button>
      </div>
      <div className="movie-details__genres">
        Genres: {genres}
      </div>
      <div className="movie-details__text">
        Release Data: {releaseDate}
      </div>
      <div className="movie-details__text">
        Duration: {duration} min
      </div>
      <div className="movie-details__description">
        <p>{description}</p>
      </div>
    </div>
  </div>
</>
