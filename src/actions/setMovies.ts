import {SET_MOVIES} from '@constants/actions';
import {Action, FilmData} from '@interfaces/interfaces';

const setFilms = (info: FilmData[]): Action => ({
  type: SET_MOVIES,
  info,
});

export {setFilms}

