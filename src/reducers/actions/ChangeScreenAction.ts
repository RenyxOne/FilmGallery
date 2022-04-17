import {Screen} from "@enums/enum";
import {Action, ChangeScreenActionConst} from "@actions/ActionTypes";

export type ChangeScreenActionType = Action<typeof ChangeScreenActionConst, Screen>;

export const ChangeScreenAction = (payload: Screen): ChangeScreenActionType => ({
    type: ChangeScreenActionConst,
    payload
  });

