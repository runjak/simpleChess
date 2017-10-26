// @flow

import type { Figure } from '../utils/figures';
import type { ChessboardActions, MoveFigurePayload } from '../actions/chessboard';

import { positionToFieldName } from '../utils/field';

import defaultBoard from './default-board.json';

type Fields = { [fieldName: string]: Figure };

export type ChessBoard = {
  fields: Fields,
};

function moveFigure(state: ChessBoard, payload: MoveFigurePayload): ChessBoard {
  const { fields } = state;
  const { sourcePosition, targetPosition } = payload;

  const sourceField = positionToFieldName(sourcePosition);
  const targetField = positionToFieldName(targetPosition);

  const sourceFigure = fields[sourceField];
  const targetFigure = fields[targetField];

  if (!sourceFigure) {
    return state;
  }

  if (targetFigure) {
    if (targetFigure.color === sourceFigure.color) {
      return state;
    }
  }

  const { [sourceField]: fieldToRemove, ...untouchedFields } = fields;

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
