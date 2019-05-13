import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function Store(initState){
  return createStore(reducer, initState, composeEnhancers(
    applyMiddleware(thunk)
  ));
}