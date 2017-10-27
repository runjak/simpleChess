// @flow
// $FlowFixMe - flow doesn't know reselect
import { createSelector } from 'reselect';

import type { State } from '../reducers';
import type { ChessBoard } from '../reducers/chessboard';
import type { Position, Fields } from '../utils/field';
import type { Figure } from '../utils/figures';

import { positionToFieldName } from '../utils/field';

export const selectChessBoard = (state: State): ChessBoard => state.chessboard;

export const selectFields: (state: State) => Fields = createSelector(
  selectChessBoard,
  (chessboard: ChessBoard) => chessboard.fields,
);

export function createFigureSelector(position: Position): (state: State) => ?Figure {
  const fieldName = positionToFieldName(position);

  return createSelector(
    selectFields,
    (fields: Fields) => fields[fieldName],
  );
}
