import { UPDATE_GLOBAL_SIDE_VISITABLE } from '../constants/actionTypes';

const initState = {
  silderVisitable: true,
  userInfo: {
    name: {
      en: '',
      zh: '',
    },
    age: '',
  },
};
export default (state = initState, action: any) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_GLOBAL_SIDE_VISITABLE:
      return {
        ...state,
        userInfo: { ...state.userInfo },
      };
    default:
      return state;
  }
};
