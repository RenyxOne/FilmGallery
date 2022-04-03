import React from "react";
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {FilmData} from "@interfaces/interfaces";
import {Search, Sort} from "@enums/enum";
import {SortResultsButton} from "@components/SortResultsButton";
import {sortBy} from "@actions/sortBy";
import {fetchFilms} from "@models/fetchFilms";
import './sort-result-container.scss'


const mapStateToProps = (state: {
  sortMode: Sort;
  searchMode: Search;
  searchInput: string;
}) => ({
  sortType: state.sortMode,
  searchType: state.searchMode,
  searchInput: state.searchInput
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
  filmList: FilmData[];
  searchInput: string;
  sortType: Sort;
  searchType: Search;
}

const SortResultsContainer = (props: IProps) => {
  const dispatch = useDispatch();

  const sortByReleaseDateClickHandler = () => () => {
    dispatch(sortBy(Sort.ReleaseDate));
    dispatch(fetchFilms('release_date', props.searchType, props.searchInput));
  };

  const sortByRatingClickHandler = () => () => {
    dispatch(sortBy(Sort.Rating));
    dispatch(fetchFilms('vote_average', props.searchType, props.searchInput));
  }
  return (
    <div className="sort-results-container">
      <div className="sort-results">
        {props.filmList && (
          <div className="sort-results__FilmsFound">
            {props.filmList.length} films found
          </div>
        )}
        <div className="sort-results__sort-by">
          <span>Sort by</span>
          <SortResultsButton
            name={'release date'}
            isActive={props.sortType === Sort.ReleaseDate}
            handleClick={sortByReleaseDateClickHandler}
          />
          <SortResultsButton
            name={'rating'}
            isActive={props.sortType === Sort.Rating}
            handleClick={sortByRatingClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

const SortResultsContainerConnected = connector(SortResultsContainer);

export {SortResultsContainerConnected as SortResultsContainer}
