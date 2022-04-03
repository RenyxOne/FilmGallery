import {CURRENT_MOVIE} from '@constants/actions';
import {Action, FilmCardProps} from '@interfaces/interfaces';

const currentFilm = (info: FilmCardProps): Action => ({
  type: CURRENT_MOVIE,
  info,
});

export {currentFilm}
