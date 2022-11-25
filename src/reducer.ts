import settings from './reducers/settings';
import { combineReducers } from 'redux'



const rootReducer = () => combineReducers({
  count: settings,
  // router: connectRouter(history)
})
export default rootReducer