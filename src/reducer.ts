import settings from './reducers/settings';
import global from './reducers/global'
import user from './reducers/user'
import menu from './reducers/menu'
import { combineReducers } from 'redux'



const rootReducer = () => combineReducers({
  count: settings,
  global,
  user,
  menu
  // router: connectRouter(history)
})
export default rootReducer