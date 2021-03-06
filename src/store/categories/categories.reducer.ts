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

const setDeleteCategoryItem = (state: State, action: Action) => {
  const newList = state.list.filter((it) => it.id !== state.selected?.id);
  console.log(newList);
  return { ...state, list: newList };
};

const setUpdateCategoryItem = (state: State, action: Action) => {
  const newList = { ...state.list };
  const newCategory = action.payload;
  console.log(newCategory);

  return { ...state, list: newList };
};

const categoriesReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case t.SET_CATEGORIES_LIST_ACTION:
      return setCategoriesList(state, action);
    case t.SET_SELECTED_CATEGORIES_ID_ACTION:
      return setSelectedCategoryId(state, action);
    case t.DELETE_CATEGORY_ITEM_ACTION:
      return setDeleteCategoryItem(state, action);
    case t.UPDATE_CATEGORY_ITEM_ACTION:
      return setUpdateCategoryItem(state, action);
    default:
      return state;
  }
};
export default categoriesReducer;
