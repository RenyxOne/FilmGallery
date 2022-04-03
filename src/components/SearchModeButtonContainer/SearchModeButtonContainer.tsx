import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchMode} from "@actions/searchMode";
import {Search} from "@enums/enum";
import {SearchModeButton} from "@components/SearchModeButton"
import {State} from "@reducers/rootReducer";

const SearchModeButtonContainer = () => {
  const searchType = useSelector((state: State) => state.searchMode);
  const dispatch = useDispatch();

  const handleTitleClick = () => () => {
      dispatch(searchMode(Search.Title));
  };
  const handleGenreClick = () => () => {
      dispatch(searchMode(Search.Genre));
  };

  return (
    <>
      <SearchModeButton
        name={'title'}
        isActive={searchType === Search.Title}
        handleClick={handleTitleClick}
      />
      <SearchModeButton
        name={'genre'}
        isActive={searchType === Search.Genre}
        handleClick={handleGenreClick}
      />
    </>
  );
}

export {SearchModeButtonContainer}
