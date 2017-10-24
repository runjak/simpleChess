// @flow
// $FlowFixMe - flow doesn't know redux
import { combineReducers } from 'redux';

import players from './players';
import chessboard from './chessboard';

export default combineReducers({
  chessboard,
  players,
});
