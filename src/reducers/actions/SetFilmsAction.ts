import {FilmData} from '@interfaces/interfaces';
import {SetFilmsActionConst, Action} from "@actions/ActionTypes";

export type SetFilmsActionType = Action<typeof SetFilmsActionConst, FilmData[]>;

export const SetFilmsAction = (payload: FilmData[]): SetFilmsActionType => ({
  type: SetFilmsActionConst,
  payload
});

