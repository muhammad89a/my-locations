import { REDUX_STATE_STORAGE_KEY } from "../utils/Constants";
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

// const persistedState = localStorage.getItem("reduxState") || {};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(REDUX_STATE_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const middlewares = [thunk /* , loadState */];
// create store with reducers, devtools and thunk middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  console.log(REDUX_STATE_STORAGE_KEY);
  localStorage.setItem(
    REDUX_STATE_STORAGE_KEY,
    JSON.stringify(store.getState())
  );
});

export default store;
