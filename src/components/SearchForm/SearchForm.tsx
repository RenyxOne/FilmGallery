import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Search, SearchByGenres, SearchByTitle, Sort} from "@enums/enum";
import {FilmData} from "@interfaces/interfaces";
import {SearchValueAction} from "@actions/SearchValueAction";
import {fetchFilms} from "@models/fetchFilms";
import './search-form.scss'
import {SearchModeAction} from "@actions/SearchModeAction";
import {SearchFormDumb} from "@components/SearchForm/SearchFormDumb";

type SearchFormProps = {
  sortMode: Sort;
  searchMode: Search;
  movieList: FilmData[];
}


const SearchForm: React.FC<SearchFormProps> = ({sortMode, searchMode}) => {
  const inputState = '';
  const [newInputState, setInputState] = useState(inputState);
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    dispatch(SearchModeAction(SearchByTitle));
  };
  const handleGenreClick = () => {
    dispatch(SearchModeAction(SearchByGenres));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };
  const handleSearch = () => {
    dispatch(SearchValueAction(newInputState));
    if (searchMode === SearchByTitle) {
      dispatch(fetchFilms(sortMode, SearchByTitle, newInputState));
    }
    if (searchMode === SearchByGenres) {
      dispatch(fetchFilms(sortMode, SearchByGenres, newInputState));
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter'){
      handleSearch();
    }
  }

  return <SearchFormDumb
    handleChange={handleChange}
    handleEnterKeyPress={handleEnterKeyPress}
    searchMode={searchMode}
    searchByTitleClickHandler={handleTitleClick}
    searchByGenreClickHandler={handleGenreClick}
    handleSearch={handleSearch}
  />
}

export {SearchForm}
