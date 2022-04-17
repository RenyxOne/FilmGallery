import {Sort} from "@enums/enum";
import {Action, SortModeActionConst} from "@actions/ActionTypes";

export type SortModeActionType = Action<typeof SortModeActionConst, Sort>;

export const SortModeAction = (payload: Sort): SortModeActionType =>({
    type: SortModeActionConst,
    payload,
  });

