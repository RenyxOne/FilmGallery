import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FilmData} from "@interfaces/interfaces";
import {SortByRating, SortByReleaseDate} from "@enums/enum";
import {SortModeAction} from "@actions/SortModeAction";
import {fetchFilms} from "@models/fetchFilms";
import './sort-result-container.scss'
import {State} from "@reducers/rootReducer";
import {SortResultsDumb} from "@components/SortResults/SortResultsDumb";

type SortResultContainerProps = {
  filmList: FilmData[];
}

export const SortResults: React.FC<SortResultContainerProps> = ({filmList}) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: State) => state.searchValue);
  const searchMode = useSelector((state: State) => state.searchMode);
  const sortMode = useSelector((state: State) => state.sortMode);

  const sortByReleaseDateClickHandler = () => {
    dispatch(SortModeAction(SortByReleaseDate));
    dispatch(fetchFilms('release_date', searchMode, searchValue));
  };
  const sortByRatingClickHandler = () => {
    console.log('rating');
    dispatch(SortModeAction(SortByRating));
    dispatch(fetchFilms('vote_average', searchMode, searchValue));
  }
  return <SortResultsDumb
    filmList={filmList}
    sortMode={sortMode}
    sortByRatingClickHandler={sortByRatingClickHandler}
    sortByReleaseDateClickHandler={sortByReleaseDateClickHandler}
  />

}
