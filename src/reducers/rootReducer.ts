import {Screen, Search, Sort} from "../enums/enum";
import {Action, FilmData} from "../interfaces/interfaces";
import {
  CHANGE_SCREEN,
  CURRENT_MOVIE,
  SET_MOVIES,
  SEARCH_MODE,
  SEARCH_VALUE,
  SORT_MODE
} from "../constants/actions";

const initialState = {
  screen: Screen.FilmsList,
  searchMode: Search.Title,
  sortMode: Sort.Rating,
};

export interface State {
  screen: Screen;
  filmsData: {films: FilmData[]};
  searchMode: Search;
  sortMode: Sort;
  currentFilm: FilmData;
  searchInput: string;
}

const reducer = (state: State, action: Action) => {
  const currentState = state || initialState;
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.info,
      };
    case SET_MOVIES:
      return {
        ...state,
        filmsData: {films: action.info},
      };
    case SEARCH_MODE:
      return {
        ...state,
        searchMode: action.info,
      };
    case SORT_MODE:
      return {
        ...state,
        sortMode: action.info,
      };
    case CURRENT_MOVIE: {
      return {
        ...state,
        currentFilm: action.info,
      };
    }
    case SEARCH_VALUE: {
      return {
        ...state,
        searchInput: action.info,
      };
    }
    default:
      return currentState;
  }
};

export {reducer}
