import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import user, {userEpic} from './user.jsx';

export default (state, context = {}) => {
  var middleware = [createEpicMiddleware(userEpic)];
  var enhancers = [];
  const devToolsExtension = context.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  const store = createStore(
    combineReducers({
      user
    }),
    state,
    composedEnhancers
  );
  return store;
}
