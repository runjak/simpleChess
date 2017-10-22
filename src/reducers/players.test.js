import reduce, { initialState } from './players';

describe('players reducer', () => {
  it('should return the given state for an unknown action', () => {
    const state = {};

    const actual = reduce(state, {});

    expect(actual).toBe(state);
  });

  it('should return the initialState as state given an undefined state', () => {
    const actual = reduce();

    expect(actual).toEqual(initialState);
  });
});
