import { Category } from "../../models/Category";
import { Action } from "../@types/Action";
import * as t from "./categories.types";

export const setCategoriesList = (categories: Category[]): Action => {
  return {
    type: t.SET_CATEGORIES_LIST_ACTION,
    payload: categories,
  };
};

export const setSelectedCategoryId = (id: number): Action => {
  return {
    type: t.SET_SELECTED_CATEGORIES_ID_ACTION,
    payload: id,
  };
};
