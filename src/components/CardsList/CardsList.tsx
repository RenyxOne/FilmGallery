import React from 'react';
import './cards-list.scss'

const CardsList:React.FC = ({children}) => (
    <div className='cards-wrapper'>
      {children}
    </div>
  )

export {CardsList}
