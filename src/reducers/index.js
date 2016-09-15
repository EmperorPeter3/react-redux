import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import weather from './weather'

export default combineReducers({
  page,
  user,
  weather
})