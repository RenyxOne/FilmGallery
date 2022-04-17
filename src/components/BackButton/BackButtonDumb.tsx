import './back-btn.scss'
import React from "react";

type BackButtonDumbProps = {
  onClick: () => void
}

export const BackButtonDumb: React.FunctionComponent<BackButtonDumbProps> = ({onClick}) => (
    <button className="back-btn" onClick={onClick}>
      Back
    </button>
);
