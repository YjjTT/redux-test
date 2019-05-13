import {createStore} from 'redux'
import reducer from '../reducer'

export default function Store(initState){
  return createStore(reducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}