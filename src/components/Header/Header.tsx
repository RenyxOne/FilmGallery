import React from 'react';
import {HeaderDumb} from "@components/Header/HeaderDumb";

type HeaderProps =
  {

  }

export const Header: React.FC<HeaderProps> = ({children}) =>
   <HeaderDumb>
    {children}
  </HeaderDumb>

