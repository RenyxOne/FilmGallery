import {FilmCardProps, FilmData} from '@interfaces/interfaces';
import {Action, CurrentFilmActionConst} from "@actions/ActionTypes";

export type CurrentFilmActionType = Action<typeof CurrentFilmActionConst, FilmData>

export const CurrentFilmAction = (payload: FilmData): CurrentFilmActionType => ({
  type: CurrentFilmActionConst,
  payload
});
