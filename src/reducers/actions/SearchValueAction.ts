import {Action, SearchValueActionConst} from "@actions/ActionTypes";

export type SearchValueActionType = Action<typeof SearchValueActionConst, string>;

export const SearchValueAction = (payload: string): SearchValueActionType => ({
  type: SearchValueActionConst,
  payload
});
