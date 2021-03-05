import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";

const rootReducer = combineReducers({
  common: () => null,
  categories: categoriesReducer,
  locations: () => null,
});

export default rootReducer;
