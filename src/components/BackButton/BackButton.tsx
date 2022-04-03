import React from "react";
import {useDispatch} from "react-redux";
import {Screen} from "@enums/enum";
import {changeScreen} from "@actions/changeScreen";
import './back-btn.scss'

const BackButton = () => {
  const dispatch = useDispatch();
  const handleScreenChange = () => {
    dispatch(changeScreen(Screen.FilmsList));
  };

  return (
    <button className="back-btn" onClick={handleScreenChange}>
      Back
    </button>
  );
}

export {BackButton}
