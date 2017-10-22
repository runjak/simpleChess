import defaultBoard from './defaultBoard.json';
import reduce from './chessboard';

describe('chessboard reducer', () => {
  it('should return the given state for an unknown action', () => {
    const state = {};

    const actual = reduce(state, {});

    expect(actual).toBe(state);
  });

  it('should return the defaultBoard as state given undefined state', () => {
    const actual = reduce();

    expect(actual).toEqual(defaultBoard);
  });
});
