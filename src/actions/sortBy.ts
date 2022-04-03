import {SORT_MODE} from '@constants/actions';
import {Action} from '@interfaces/interfaces';
import {Sort} from "@enums/enum";

const sortBy = (info: Sort): Action =>({
    type: SORT_MODE,
    info,
  });

export {sortBy}

