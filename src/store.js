import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/rootReducer';


const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware,logger,promise))
);

store.subscribe(() => {
 
});
export default store;




