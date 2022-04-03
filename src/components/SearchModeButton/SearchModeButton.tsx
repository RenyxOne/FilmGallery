import React from "react";
import './search-mode-button.scss'

interface ISearchModeButtonProps {
  name: string,
  isActive: boolean,
  handleClick: Function
}

const SearchModeButton = (props: ISearchModeButtonProps) => (
    <button
      type="button"
      className={`search-mode-button ${
        props.isActive ? 'search-mode-button--active' : ''
      }`}
      onClick={props.handleClick()}
    >
      {props.name}
    </button>
  );

export {SearchModeButton}
