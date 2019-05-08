import {createStore} from 'redux'
import reducer from '../reducer'

export default function Store(initState){
  return createStore(reducer, initState);
}