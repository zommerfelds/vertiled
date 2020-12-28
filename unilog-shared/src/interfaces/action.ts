import {Coordinates, Cursor, Rectangle} from "./data";

export type Action =
  | SetTileAction
  | SetSelectionAction
  | SetCursorAction
  | MoveCursorAction
  | AddUserAction
  | RemoveUserAction
  | SetLayerVisibilityAction;

export enum ActionType {
  SetTile = "SetTile",
  SetSelection = "SetSelection",
  SetCursor = "SetCursor",
  MoveCursor = "MoveCursor",
  AddUser = "AddUser",
  RemoveUser = "RemoveUser",
  SetLayerVisibility = "SetLayerVisibility",
}

export interface SetTileAction {
  type: ActionType.SetTile;
  id: string;
  layerId: number;
  index: number;
  tileId: number;
}

export interface SetSelectionAction {
  type: ActionType.SetSelection;
  userId: string;
  selection?: Rectangle;
}

export interface SetCursorAction {
  type: ActionType.SetCursor;
  userId: string;
  cursor?: Cursor;
}

export interface MoveCursorAction {
  type: ActionType.MoveCursor;
  userId: string;
  offset: Coordinates;
}

export interface SetLayerVisibilityAction {
  type: ActionType.SetLayerVisibility;
  layerId: number;
  visibility: boolean;
}

export interface AddUserAction {
  type: ActionType.AddUser;
  userId: string;
}

export interface RemoveUserAction {
  type: ActionType.RemoveUser;
  userId: string;
}
