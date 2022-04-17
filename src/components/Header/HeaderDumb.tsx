import React from "react";
import {Logo} from "@components/Logo";
import './header.scss'

type HeaderDumbProps = {} & React.HTMLAttributes<HTMLDivElement>

export const HeaderDumb: React.FC<HeaderDumbProps> = ({className, children}) => (
      <header className={`header ${className || ''}`}>
        <Logo className='header__logo'/>
        {children}
      </header>);
