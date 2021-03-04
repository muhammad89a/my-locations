// redux
import { createStore, applyMiddleware, compose } from "redux";
// thunk
import thunk from "redux-thunk";
// root-reducer
import rootReducer from "./root.reducer";
// devtools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

// create store with reducers, devtools and thunk middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
