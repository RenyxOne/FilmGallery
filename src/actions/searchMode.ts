import {SEARCH_MODE} from '@constants/actions';
import {Search} from '@enums/enum';
import {Action} from "@interfaces/interfaces";

const searchMode = (info: Search): Action => ({
  type: SEARCH_MODE,
  info,
});

export {searchMode}
