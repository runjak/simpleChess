import reduce, { initialState } from './players';

describe('players reducer', () => {
  it('should return the given state for an unknown action', () => {
    const state = {};

    const actual = reduce(state, {
      type: '',
    });

    expect(actual).toBe(state);
  });

  it('should return the initialState as state given an undefined state', () => {
    const actual = reduce(undefined, {
      type: '',
    });

    expect(actual).toEqual(initialState);
  });

  describe('with SelectFigureAction', () => {
    it('should select the given field', () => {
      const expected = {
        currentTurn: 'white',
        selectedField: 'foobar',
      };

      const actual = reduce(undefined, {
        type: 'SELECT_FIGURE',
        payload: 'foobar',
      });

      expect(actual).toEqual(expected);
    });

    it('should not select the given field if one is already selected', () => {
      const state = {
        currentTurn: 'white',
        selectedField: 'foobar',
      };

      const actual = reduce(state, {
        type: 'SELECT_FIGURE',
        payload: 'raboof',
      });

      expect(actual).toBe(state);
    });
  });

  describe('with SelectTargetFieldAction', () => {
    it('should switch currentTurn and reset the selected field', () => {
      const testTurns = [
        {
          currentTurn: 'white',
          expectedTurn: 'black',
        },
        {
          currentTurn: 'black',
          expectedTurn: 'white',
        },
      ];

      testTurns.forEach((testTurn) => {
        const { currentTurn, expectedTurn } = testTurn;

        const state = {
          currentTurn,
          selectedField: 'foobar',
        };

        const expected = {
          currentTurn: expectedTurn,
          selectedField: null,
        };

        const actual = reduce(state, {
          type: 'SELECT_TARGET_FIELD',
          payload: 'herpDerp',
        });

        expect(actual).toEqual(expected);
      });
    });

    it('should not change the state if no field is selected', () => {
      const states = [
        { currentTurn: 'white' },
        {
          currentTurn: 'black',
          selectedField: null,
        },
      ];

      states.forEach((state) => {
        const actual = reduce(state, {
          type: 'SELECT_TARGET_FIELD',
          payload: 'foobar',
        });

        expect(actual).toBe(state);
      });
    });
  });
});
