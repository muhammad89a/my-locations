import { Category } from "../../models/Category";
import { Action } from "../@types/Action";
import * as t from "./categories.types";

export interface State {
  list: Category[];
  selected: Category | null;
}

export const INITIAL_STATE: State = {
  list: [],
  selected: null,
};

const setCategoriesList = (state: State, action: Action) => {
  return { ...state, list: action.payload };
};

const categoriesReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case t.SET_CATEGORIES_LIST_ACTION:
      return setCategoriesList(state, action);
    default:
      return state;
  }
};
export default categoriesReducer;
