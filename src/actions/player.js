// @flow
import type { Action } from './';
import type { Position } from '../utils/field';
import type { State } from '../reducers';

import {
  selectCurrentTurn,
  selectSelectedField,
} from '../selectors/players';
import {
  createFigureSelector,
  selectFields,
} from '../selectors/chessboard';
import { positionToFieldName, isValidMove } from '../utils/field';
import { moveFigure } from './chessboard';

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

export function clickField(clickedPosition: Position) {
  const clickedFieldName = positionToFieldName(clickedPosition);

  return (dispatch: (action: Action<any>) => void, getState: () => State) => {
    const state = getState();
    const maybeSourcePosition = selectSelectedField(state);
    const fields = selectFields(state);
    const currentTurn = selectCurrentTurn(state);

    if (!maybeSourcePosition) {
      const clickedFigure = createFigureSelector(clickedPosition)(state);

      if (clickedFigure && clickedFigure.color === currentTurn) {
        dispatch(selectFigure(clickedPosition));
      }

      return;
    }

    // $FlowFixMe - flow being picky about type refinement
    const sourcePosition: Position = maybeSourcePosition;

    if (positionToFieldName(sourcePosition) === clickedFieldName) {
      return;
    }

    if (!isValidMove(fields, positionToFieldName(sourcePosition), clickedFieldName)) {
      return;
    }

    dispatch(selectTargetField(clickedPosition));
    dispatch(moveFigure(sourcePosition, clickedPosition));
  };
}
