// @flow
import type { Color } from '../utils/colors';
import type { Position } from '../utils/field';
import type { PlayerActions } from '../actions/player';

import { oppositeColor } from '../utils/colors';

export type PlayerState = {
  currentTurn: Color,
  selectedField: ?Position
};

export const initialState = {
  currentTurn: 'white',
  selectedField: null,
};

function selectFigure(state: PlayerState, position: Position): PlayerState {
  if (state.selectedField) {
    return state;
  }

  return {
    ...state,
    selectedField: position,
  };
}

function selectTargetField(state: PlayerState): PlayerState {
  const { currentTurn, selectedField } = state;

  if (!selectedField) {
    return state;
  }

  return {
    ...state,
    selectedField: null,
    currentTurn: oppositeColor(currentTurn),
  };
}

// eslint-disable-next-line no-unused-vars
export default function reduce(
  state: PlayerState = initialState,
  action: PlayerActions,
): PlayerState {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_FIGURE':
      return selectFigure(state, payload);
    case 'SELECT_TARGET_FIELD':
      return selectTargetField(state);
    default:
      return state;
  }
}
