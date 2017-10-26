import defaultBoard from './default-board.json';
import reduce from './chessboard';

describe('chessboard reducer', () => {
  it('should return the given state for an unknown action', () => {
    const state = {};

    const actual = reduce(state, {});

    expect(actual).toBe(state);
  });

  it('should return the defaultBoard as state given undefined state', () => {
    const actual = reduce(undefined, {});

    expect(actual).toEqual(defaultBoard);
  });

  describe('with MOVE_FIGURE action', () => {
    const action = {
      type: 'MOVE_FIGURE',
      payload: {
        sourcePosition: {
          column: 'a',
          row: 1,
        },
        targetPosition: {
          column: 'h',
          row: 8,
        },
      },
    };

    const state = {
      fields: {
        a1: {
          piece: 'King',
          color: 'black',
        },
        b2: {
          piece: 'Queen',
          color: 'white',
        },
        c3: {
          piece: 'Rook',
          color: 'black',
        },
      },
    };

    it('should move a figure from source to target', () => {
      const { fields: { a1, b2, c3 } } = state;
      const expected = {
        fields: {
          b2,
          c3,
          h8: a1,
        },
      };

      const actual = reduce(state, action);

      expect(actual).toEqual(expected);
    });

    it('should not change state if source and target are the same', () => {
      const testAction = {
        ...action,
        payload: {
          ...action.payload,
          targetPosition: action.payload.sourcePosition,
        },
      };

      const actual = reduce(state, testAction);

      expect(actual).toBe(state);
    });

    it('should overwrite figures of a different color', () => {
      const testAction = {
        ...action,
        payload: {
          ...action.payload,
          targetPosition: {
            column: 'b',
            row: 2,
          },
        },
      };

      const { fields: { a1, c3 } } = state;
      const expected = {
        fields: {
          b2: a1,
          c3,
        },
      };

      const actual = reduce(state, testAction);

      expect(actual).toEqual(expected);
    });

    it('should remain unchanged instead of overwriting the same color', () => {
      const testAction = {
        ...action,
        payload: {
          ...action.payload,
          targetPosition: {
            column: 'c',
            row: 3,
          },
        },
      };

      const actual = reduce(state, testAction);

      expect(actual).toBe(state);
    });

    it('should remain unchanged when no figure is found on sourcePosition', () => {
      const testAction = {
        ...action,
        payload: {
          ...action.payload,
          sourcePosition: {
            column: 'd',
            row: 4,
          },
        },
      };

      const actual = reduce(state, testAction);

      expect(actual).toBe(state);
    });
  });
});
