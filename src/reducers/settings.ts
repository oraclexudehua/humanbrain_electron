import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START
} from '../constants/actionTypes';


const initState={
  userName:'admin'
}
export default (state = initState, action:any) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case SETTINGS_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      return {
        ...state,
        inProgress: true
      };
    default:
      return state;
  }
};
