import { Screen} from "@enums/enum";
import {CHANGE_SCREEN} from "@constants/actions";
import {Action} from "@interfaces/interfaces";

const changeScreen = (info: Screen): Action => ({
    type: CHANGE_SCREEN,
    info,
  });

export {changeScreen}
