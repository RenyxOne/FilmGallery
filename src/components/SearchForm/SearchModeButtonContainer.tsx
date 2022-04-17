import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SearchModeAction} from "@actions/SearchModeAction";
import {Search, SearchByGenres, SearchByTitle} from "@enums/enum";
import {State} from "@reducers/rootReducer";
import {ActiveButton} from "@components/ActiveButton";

type SearchModeButtonContainerProps = {
  searchMode: Search;
  handleTitleClick: () => void;
  handleGenreClick: () => void;
}

export const SearchModeButtonContainer: React.FC<SearchModeButtonContainerProps> = (
  {
    searchMode,
    handleTitleClick,
    handleGenreClick
  }) => (
    <>
      <ActiveButton
        name={'title'}
        isActive={searchMode === SearchByTitle}
        handleClick={handleTitleClick}
      />
      <ActiveButton
        name={'genre'}
        isActive={searchMode === SearchByGenres}
        handleClick={handleGenreClick}
      />
    </>
  )
