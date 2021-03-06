import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";
import contextReducer from "./context/context.reducer";

const rootReducer = combineReducers({
  common: () => null,
  categories: categoriesReducer,
  locations: () => null,
  context: contextReducer,
});

export default rootReducer;
