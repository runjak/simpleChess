// @flow
import { createSelector } from 'reselect';

import type { State } from '../reducers';
import type { PlayerState } from '../reducers/players';
import type { Color } from '../utils/colors';

export const selectPlayerState = (state: State): PlayerState => state.players;

export const selectCurrentTurn: (state: State) => Color = createSelector(
  selectPlayerState,
  (playerState: PlayerState) => playerState.currentTurn,
);

export const selectSelectedField: (state: State) => ?Position = createSelector(
  selectPlayerState,
  (playerState: PlayerState) => playerState.selectedField,
);
