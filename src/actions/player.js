// @flow

import type { Action } from './';
import type { Position } from '../utils/Field';

export type SelectFigureAction = Action<Position> & {
  type: 'SELECT_FIGURE',
};

export type SelectTargetFieldAction = Action<Position> & {
  type: 'SELECT_TARGET_FIELD';
};

export type PlayerActions = SelectFigureAction | SelectTargetFieldAction;

export function selectFigure(position: Position): SelectFigureAction {
  return {
    type: 'SELECT_FIGURE',
    payload: position,
  };
}

export function selectTargetField(position: Position): SelectTargetFieldAction {
  return {
    type: 'SELECT_TARGET_FIELD',
    payload: position,
  };
}
