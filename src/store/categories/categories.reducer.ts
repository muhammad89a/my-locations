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

const setSelectedCategoryId = (state: State, action: Action) => {
  console.log(state);

  return {
    ...state,
    selected: state.selected === action.payload ? null : action.payload,
  };
};

const categoriesReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case t.SET_CATEGORIES_LIST_ACTION:
      return setCategoriesList(state, action);
    case t.SET_SELECTED_CATEGORIES_ID_ACTION:
      return setSelectedCategoryId(state, action);
    default:
      return state;
  }
};
export default categoriesReducer;
