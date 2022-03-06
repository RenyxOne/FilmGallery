import {render} from 'react-dom';
import React from 'react';

import {MyFC} from './Components/MyFC';
import {MyC} from './Components/MyC';
import {MyPC} from './Components/MyPC';
import {MyCwithState} from './Components/MyCwithState';

const rootElement = document.getElementById('root');

render(
  <>
    <MyFC text="this is MyFC Component" num={1} />
    <MyC text="this is MyC Component" num={2} />
    <MyPC text="this is MyC Component" num={3} />
    <MyCwithState text="this is MyCwithState Component" />
  </>,
  rootElement
);
