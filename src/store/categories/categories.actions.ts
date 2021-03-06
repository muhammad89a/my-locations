import { Category } from "../../models/Category";
import { Action } from "../@types/Action";
import * as t from "./categories.types";

export const setCategoriesList = (categories: Category[]): Action => {
  return {
    type: t.SET_CATEGORIES_LIST_ACTION,
    payload: categories,
  };
};

export const setSelectedCategoryId = (category: Category): Action => {
  return {
    type: t.SET_SELECTED_CATEGORIES_ID_ACTION,
    payload: category,
  };
};

export const setDeleteCategoryItem = (): Action => {
  return {
    type: t.DELETE_CATEGORY_ITEM_ACTION,
    payload: null,
  };
};

export const setUpdateCategoryItem = (category: Category): Action => {
  return {
    type: t.UPDATE_CATEGORY_ITEM_ACTION,
    payload: null,
  };
};
