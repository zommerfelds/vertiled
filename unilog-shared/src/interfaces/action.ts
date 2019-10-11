export type Action = CreateBallAction | MoveBallAction;

export enum ActionType {
  CreateBall = "CreateBall",
  MoveBall = "MoveBall",
}

export interface CreateBallAction {
  type: ActionType.CreateBall;
  id: string;
  color: string;
  bucketId: string;
}

export interface MoveBallAction {
  type: ActionType.MoveBall;
  id: string;
  bucketId: string;
}