import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducers';

const store = createStore(
  // @ts-ignore
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export {store}
