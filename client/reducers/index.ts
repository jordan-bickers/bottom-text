import { combineReducers } from 'redux'
import meme from './meme'
import formReducer from './form'
// import stuff from './stuff'

export default combineReducers({
  meme,
  formReducer,
  // stuff
})
