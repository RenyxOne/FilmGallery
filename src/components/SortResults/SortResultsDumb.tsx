import React from "react";
import {FilmData} from "@interfaces/interfaces";
import {ActiveButton} from "@components/ActiveButton";
import {Sort, SortByRating, SortByReleaseDate} from "@enums/enum";

type SortResultsContainerDumbProps = {
  filmList: FilmData[];
  sortMode: Sort;
  sortByReleaseDateClickHandler: () => void;
  sortByRatingClickHandler: () => void;

}

export const SortResultsDumb: React.FC<SortResultsContainerDumbProps> = (
  {
    sortMode,
    sortByReleaseDateClickHandler,
    sortByRatingClickHandler
  }) => (
  <div className="sort-results-container">
    <div className="sort-results">
      <div className="sort-results__sort-by">
        <span>Sort by</span>
        <ActiveButton
          name={'release date'}
          isActive={sortMode === SortByReleaseDate}
          handleClick={sortByReleaseDateClickHandler}
        />
        <ActiveButton
          name={'rating'}
          isActive={sortMode === SortByRating}
          handleClick={sortByRatingClickHandler}
        />
      </div>
    </div>
  </div>
);
