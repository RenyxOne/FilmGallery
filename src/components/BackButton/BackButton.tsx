import React from "react";
import {useDispatch} from "react-redux";
import {ScreenFilmList} from "@enums/enum";
import {ChangeScreenAction} from "@actions/ChangeScreenAction";
import {BackButtonDumb} from "./BackButtonDumb"

const BackButton = () => {
  const dispatch = useDispatch();
  const handleScreenChange = () => {
    dispatch(ChangeScreenAction(ScreenFilmList));
  };

  return <BackButtonDumb onClick={handleScreenChange}/>
}

export {BackButton}
