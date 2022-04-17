import {Search} from '@enums/enum';
import {Action, SearchModeActionConst} from "@actions/ActionTypes";

export type SearchModeActionType = Action<typeof SearchModeActionConst, Search>;

export const SearchModeAction = (payload: Search): SearchModeActionType => ({
  type: SearchModeActionConst,
  payload
});
