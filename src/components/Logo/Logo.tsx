import React from "react";

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className}) => (
  <div className={`logo ${className || ''}`}>
    My
    <span className='logo logo-regular'>Film</span>
    Gallery
  </div>
)

export {Logo}
