
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import rootReducer from './reducers'
import {rootReducer} from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk,
];
 /* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,

  // CAUSES Actions must be plain objects. Use custom middleware for async actions. TODO find out if my code is isomorphic??
  composeWithDevTools(applyMiddleware(...middleware)),
)

// store.subscribe(() => {
//   console.log('SUBSCRIBER store changed', store.getState());
// })

export default store;

//can i apply any middleware?

// is it the case it has to do with async?
