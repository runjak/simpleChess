// @flow

import type { Action } from './';
import type { Position } from '../utils/field';

export type MoveFigurePayload = {
  sourcePosition: Position,
  targetPosition: Position,
};

export type MoveFigureAction = Action<MoveFigurePayload> & {
  type: 'MOVE_FIGURE',
};

export type ChessboardActions = MoveFigureAction;

// eslint-disable-next-line import/prefer-default-export
export function moveFigure(
  sourcePosition: Position,
  targetPosition: Position,
): MoveFigureAction {
  return {
    type: 'MOVE_FIGURE',
    payload: {
      sourcePosition,
      targetPosition,
    },
  };
}
