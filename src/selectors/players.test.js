import {
  selectPlayerState,
  selectCurrentTurn,
  selectSelectedField,
} from './players';

describe('players selectors', () => {
  const state = {
    players: {
      currentTurn: 'currentTurn',
      selectedField: 'selectedField',
    },
  };

  describe('selectPlayerState()', () => {
    it('should select the players state', () => {
      const testState = {
        players: 'foobar',
      };

      const expected = 'foobar';
      const actual = selectPlayerState(testState);

      expect(actual).toEqual(expected);
    });
  });

  describe('selectCurrentTurn()', () => {
    it('should select the currentTurn', () => {
      const expected = 'currentTurn';
      const actual = selectCurrentTurn(state);

      expect(actual).toEqual(expected);
    });

    it('should memoize', () => {
      const testState = {
        ...state,
      };

      const resultA = selectCurrentTurn(testState);
      delete testState.players;
      const resultB = selectCurrentTurn(testState);

      expect(resultA).toBe(resultB);
    });
  });

  describe('selectSelectedField()', () => {
    it('should select the selectedField', () => {
      const expected = 'selectedField';
      const actual = selectSelectedField(state);

      expect(actual).toEqual(expected);
    });

    it('should memoize', () => {
      const testState = {
        ...state,
      };

      const resultA = selectSelectedField(testState);
      delete testState.players;
      const resultB = selectSelectedField(testState);

      expect(resultA).toBe(resultB);
    });
  });
});
