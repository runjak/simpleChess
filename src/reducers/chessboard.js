// @flow

import type { Figure } from '../utils/figures';

import defaultBoard from './default-board.json';

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
