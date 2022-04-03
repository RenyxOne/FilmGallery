import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Search, Sort} from "@enums/enum";
import {FilmData} from "@interfaces/interfaces";
import {searchValue} from "@actions/searchInput";
import {fetchFilms} from "@models/fetchFilms";
import {SearchModeButtonContainer} from "@components/SearchModeButtonContainer";
import {SortResultsContainer} from "@components/SortResultsContainer";
import './search-form.scss'


const SearchForm = (props: {
  sortBy: Sort;
  searchType: Search;
  movieList: FilmData[];
}) => {
  const inputState = {value: ''};
  const [newInputState, setInputState] = useState(inputState);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({value: event.target.value});
  };

  const handleSearch = () => {
    dispatch(searchValue(newInputState));
    if (props.searchType === Search.Title) {
      dispatch(fetchFilms(props.sortBy, Search.Title, newInputState));
    }
    if (props.searchType === Search.Genre) {
      dispatch(fetchFilms(props.sortBy, Search.Genre, newInputState));
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter'){
      handleSearch();
    }
  }
  return (
    <>
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
              <SearchModeButtonContainer/>
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
      <SortResultsContainer filmList={props.movieList} />
    </>
  );
}

export {SearchForm}
