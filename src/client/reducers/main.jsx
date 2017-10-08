import 'rxjs';

const CLICK = 'main/CLICK';
const CLACK = 'main/CLACK';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CLACK:
      console.log('clack!');
      return {
        ...state
      }
    default:
      return state;
  }
};

export const clicker = payload => ({
  type: CLICK,
  payload
});

export const clacker = payload => ({
  type: CLACK,
  payload
});

export const mainEpic = action$ => {
  return action$.ofType(CLICK)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .map(clacker);
}

