import { Action } from "../@types/Action";
import * as t from "./context.types";
import { ContextActionType } from "../../models/ContextActionType.enum";

export const setContextActionTypeById = (id: number): Action => {
  return {
    type: t.SET_CONTEXT_TYPE_BY_ID_ACTION,
    payload: id,
  };
};

export const setContextActionType = (type: ContextActionType): Action => {
  return {
    type: t.SET_CONTEXT_TYPE_ACTION,
    payload: type,
  };
};
