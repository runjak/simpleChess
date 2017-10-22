// @flow
import type {
  Color,
  Position,
} from '../utils/Field';

export type PlayerState = {
  currentTurn: Color,
  selectedField: ?Position
};

export const initialState = {
  currentTurn: 'white',
  selectedField: null,
};

// eslint-disable-next-line no-unused-vars
export default function reduce(state: PlayerState = initialState, action: any): PlayerState {
  return state;
}
