import {SetFilmsActionType} from "@actions/SetFilmsAction";
import {
  ChangeScreenActionConst,
  CurrentFilmActionConst,
  SearchModeActionConst,
  SearchValueActionConst,
  SetFilmsActionConst,
  SortModeActionConst
} from "@actions/ActionTypes";
import {ChangeScreenActionType} from "@actions/ChangeScreenAction";
import {CurrentFilmActionType} from "@actions/CurrentFilmAction";
import {SearchValueActionType} from "@actions/SearchValueAction";
import {SearchModeActionType} from "@actions/SearchModeAction";
import {SortModeActionType} from "@actions/SortModeAction";
import {Screen, ScreenFilmList, Search, SearchByTitle, Sort, SortByRating} from "@enums/enum";
import {FilmData} from "@interfaces/interfaces";

export type RootAction =
  ChangeScreenActionType |
  CurrentFilmActionType |
  SearchModeActionType |
  SearchValueActionType |
  SetFilmsActionType |
  SortModeActionType

export type State = {
  screen: Screen;
  filmsData: {films: FilmData[]};
  searchMode: Search;
  sortMode: Sort;
  currentFilm?: FilmData;
  searchValue: string;
}

const initialState: State = {
  screen: ScreenFilmList,
  searchMode: SearchByTitle,
  sortMode: SortByRating,
  filmsData: {films: []},
  searchValue: ''
};

const reducer = (inputState: State, action: RootAction) => {
  const state = inputState || initialState;
  switch (action.type) {
    case ChangeScreenActionConst:
      return {
        ...state,
        screen: action.payload,
      };
    case SetFilmsActionConst:
      return {
        ...state,
        filmsData: {films: action.payload},
      };
    case SearchModeActionConst:
      return {
        ...state,
        searchMode: action.payload,
      };
    case SortModeActionConst:
      return {
        ...state,
        sortMode: action.payload,
      };
    case CurrentFilmActionConst: {
      return {
        ...state,
        currentFilm: action.payload,
      };
    }
    case SearchValueActionConst: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export {reducer}
