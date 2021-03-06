import { Action } from "../@types/Action";
import * as t from "./context.types";
import { ContextActionType } from "../../models/ContextActionType.enum";

export interface State {
  contextType: ContextActionType;
}

export const INITIAL_STATE: State = {
  contextType: ContextActionType.New,
};

const setContextActionTypeById = (state: State, action: Action) => {
  return {
    ...state,
    contextType:
      action.payload == null ? ContextActionType.New : ContextActionType.Update,
  };
};

const setContextActionType = (state: State, action: Action) => {
  console.log("setContextActionType");

  return {
    ...state,
    contextType: action.payload,
  };
};

const contextReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case t.SET_CONTEXT_TYPE_BY_ID_ACTION:
      return setContextActionTypeById(state, action);
    case t.SET_CONTEXT_TYPE_ACTION:
      return setContextActionType(state, action);
    default:
      return state;
  }
};
export default contextReducer;
