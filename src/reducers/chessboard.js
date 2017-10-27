// @flow
import type { Fields } from '../utils/field';
import type { ChessboardActions, MoveFigurePayload } from '../actions/chessboard';

import { positionToFieldName, isValidMove } from '../utils/field';

import defaultBoard from './default-board.json';

export type ChessBoard = {
  fields: Fields,
};

function moveFigure(state: ChessBoard, payload: MoveFigurePayload): ChessBoard {
  const { fields } = state;
  const { sourcePosition, targetPosition } = payload;

  const sourceField = positionToFieldName(sourcePosition);
  const targetField = positionToFieldName(targetPosition);

  if (!isValidMove(fields, sourceField, targetField)) {
    return state;
  }

  const { [sourceField]: sourceFigure, ...untouchedFields } = fields;

  return {
    fields: {
      ...untouchedFields,
      [targetField]: sourceFigure,
    },
  };
}

export const initialState = defaultBoard;

// eslint-disable-next-line no-unused-vars
export default function reduce(
  state: ChessBoard = defaultBoard,
  action: ChessboardActions,
): ChessBoard {
  const { type, payload } = action;

  switch (type) {
    case 'MOVE_FIGURE':
      return moveFigure(state, payload);

    default:
      return state;
  }
}
