// @flow
import type { Color } from '../utils/colors';

import defaultBoard from './default-board.json';

export type Piece =
  'King' |
  'Queen' |
  'Rook' |
  'Bishop' |
  'Knight' |
  'Pawn';

export type Figure = {
  piece: Piece,
  color: Color,
};

export type ChessBoard = {
  fields: {
    [fieldName: string]: Figure,
  },
};

export const initialState = defaultBoard;

// eslint-disable-next-line no-unused-vars
export default function reduce(state: ChessBoard = defaultBoard, action: any): ChessBoard {
  return state;
}
