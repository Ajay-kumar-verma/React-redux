import { createStore, applyMiddleware } from 'redux'
// the above part is for applyiing middleware and createstore  


import createSagaMiddleware from 'redux-saga'
// it is a  saga middleware that can be used for createStore   
import saga  from '../saga/index.js';
// this is a middleware

import reducers from "../reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    reducers
    , composeEnhancers(applyMiddleware(sagaMiddleware))
    
  //  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

   );
   sagaMiddleware.run(saga);

   const action = type => store.dispatch({type})


export default store;