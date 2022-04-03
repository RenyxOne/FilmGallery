import {
  SET_MOVIES,
  SORT_MODE,
  CURRENT_MOVIE,
  SEARCH_VALUE,
  SEARCH_MODE,
  CHANGE_SCREEN
} from '../constants/actions'

enum Screen {
  FilmsList = 'filmList',
  Film = 'movie',
}

enum Search {
  Title = 'title',
  Genre = 'genres',
}

enum Sort {
  ReleaseDate = 'release_date',
  Rating = 'vote_average',
}

export {Screen, Search, Sort};
