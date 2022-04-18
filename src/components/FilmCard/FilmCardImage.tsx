import React from "react";
import {MySmartImage} from "@components/MySmartImage/MySmartImage";
import './film-card.scss';

type FilmCardImageProps = {
  image: string;
}

export const FilmCardImage: React.FC<FilmCardImageProps> = ({image}) => (
    <div className="film-card__image-container">
      <MySmartImage
        className="film-card__image"
        src={image}
        alt="Film Poster"
      />
    </div>
  )
