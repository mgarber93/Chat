import 'rxjs';

export const SET_CURRENT_USER = 'user/SET_USER';
export const SET_PENDING_USER = 'user/SET_USER';
export const HANDLE_INPUT_CHANGE = 'user/HANDLE_INPUT_CHANGE';
export const HANDLE_SUBMIT = 'user/HANDLE_SUBMIT';

const initialState = {
  currentUser: null,
  pendingUser: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    case SET_PENDING_USER:
      return {
        ...state,
        pendingUser: payload
      }
    case HANDLE_INPUT_CHANGE:
      let newState = {...state};
      newState.pendingUser = newState.pendingUser || {};
      newState.pendingUser[payload.property] = payload.value;
      return newState;
    default:
      return {...state};
  }
};

export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload
});

export const setPendingUser = payload => ({
  type: SET_PENDING_USER,
  payload
});

export const handleInputChange = (value, property) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: {value, property}
});

export const handleSubmit = payload => ({
  type: HANDLE_SUBMIT,
  payload
});

export const userEpic = action$ => {
  return action$.ofType(SET_PENDING_USER)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .map(console.log);
};

