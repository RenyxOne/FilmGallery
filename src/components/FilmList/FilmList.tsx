import React from 'react';
import {IFilmListProps} from "@interfaces/interfaces";
import {FilmCard} from "@components/FilmCard";
import './film-list.scss'

const FilmList = (props: IFilmListProps) => (
    <div className='movies-wrapper'>
      {props.filmsData.map((filmData) => (
        <FilmCard
          screen={props.screen}
          setScreen={props.setScreen}
          title={filmData.title}
          poster_path={filmData.poster_path}
          release_date={filmData.release_date.substring(0, 4)}
          genres={filmData.genres[0]}
          key={filmData.id}
          id={filmData.id}
          vote_average={filmData.vote_average}
          runtime={filmData.runtime}
          overview={filmData.overview}
        />
      ))}
    </div>
  )

export {FilmList}
