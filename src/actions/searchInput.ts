import {SEARCH_VALUE} from "@constants/actions";
import {Action} from "@interfaces/interfaces";

const searchValue = (info: {value: string}): Action => ({
  type: SEARCH_VALUE,
  info,
});

export {searchValue}
