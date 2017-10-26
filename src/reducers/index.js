// @flow
// $FlowFixMe - flow doesn't know redux
import { combineReducers } from 'redux';

import type { PlayerState } from './players';
import type { ChessBoard } from './chessboard';

import players from './players';
import chessboard from './chessboard';

export type State = {
  players: PlayerState,
  chessboard: ChessBoard,
};

export default combineReducers({
  chessboard,
  players,
});
