import React from "react";
import './sort-results-button.scss'

interface ISortResultsProps {
  name: string;
  isActive: boolean;
  handleClick: Function;
}

const SortResultsButton = (props: ISortResultsProps) => (
    <button
      className={`sort-results-button ${
        props.isActive ? 'sort-results-button--active' : ''
      }`}
      onClick={props.handleClick()}
    >
      {props.name}
    </button>
  );

export {SortResultsButton}
