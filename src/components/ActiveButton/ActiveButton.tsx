import React from "react";
import './active-button.scss'

type ActiveButtonProps = {
  name: string;
  isActive: boolean;
  handleClick: () => void;
}

const ActiveButton: React.FC<ActiveButtonProps> = ({name, isActive, handleClick}) => (
    <button
      className={`active-button ${
        isActive ? 'active-button--active' : ''
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );

export {ActiveButton}
