import {SearchModeButtonContainer} from "@components/SearchForm/SearchModeButtonContainer";
import React from "react";
import {Search} from "@enums/enum";

type SearchFormDumbProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleEnterKeyPress: React.KeyboardEventHandler;
  searchMode: Search;
  searchByTitleClickHandler: () => void;
  searchByGenreClickHandler: () => void;
  handleSearch: () => void;
}

export const SearchFormDumb: React.FC<SearchFormDumbProps> = (
  {
    handleChange,
    handleEnterKeyPress,
    searchByTitleClickHandler,
    searchByGenreClickHandler,
    searchMode,
    handleSearch
  }) => (
  <div className="search-container">
    <div className="search-form">
      <label htmlFor="search-form__label" className="search__title">
        <h1 className='main-title'>FIND YOUR MOVIE</h1>
      </label>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder="Your search input"
        className="search-form__input"
        onChange={handleChange}
        onKeyPress={handleEnterKeyPress}
      />
      <div className="search-form__additions">
        <div className="search-form__search-by">
          <span>search by </span>
          <SearchModeButtonContainer handleTitleClick={searchByTitleClickHandler} handleGenreClick={searchByGenreClickHandler} searchMode={searchMode}/>
        </div>
        <button
          type="button"
          className="search-form__button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  </div>
);
