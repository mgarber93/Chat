import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import main, {mainEpic} from './main.jsx';

export default (state, context = {}) => {
  var middleware = [createEpicMiddleware(mainEpic)];
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
      main
    }),
    state,
    composedEnhancers
  );
  return store;
}
