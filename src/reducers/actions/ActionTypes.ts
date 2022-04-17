export const SetFilmsActionConst = 'SetFilms';
export const SortModeActionConst = 'SortMode';
export const CurrentFilmActionConst = 'CurrentFilm';
export const SearchValueActionConst = 'SearchValue';
export const SearchModeActionConst = 'SearchMode';
export const ChangeScreenActionConst = 'ChangeScreen';

export type Action<S,T> = {
  type: S,
  payload: T
}
