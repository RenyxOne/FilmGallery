export const ScreenFilmList = 'filmList;'
export const ScreenFilm = 'film'
export type Screen = typeof ScreenFilmList | typeof ScreenFilm;

export const SearchByTitle = 'title';
export const SearchByGenres = 'genres';
export type Search = typeof SearchByTitle | typeof SearchByGenres;


export const SortByReleaseDate = 'release_date';
export const SortByRating = 'vote_average';
export type Sort = typeof SortByReleaseDate | typeof SortByRating;
