import {
  selectChessBoard,
  selectFields,
  createFigureSelector,
} from './chessboard';

describe('chessboard selectors', () => {
  describe('selectChessBoard()', () => {
    it('should select the chessboard', () => {
      const state = { chessboard: 'foobar' };

      const expected = 'foobar';
      const actual = selectChessBoard(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('selectFields()', () => {
    const state = {
      chessboard: {
        fields: 'foobar',
      },
    };

    it('should select the fields of the chessboard from the state', () => {
      const expected = 'foobar';
      const actual = selectFields(state);

      expect(actual).toEqual(expected);
    });

    it('should memoize', () => {
      const stateCopy = {
        ...state,
      };

      const resultA = selectFields(stateCopy);
      delete stateCopy.chessboard;
      const resultB = selectFields(stateCopy);

      expect(resultA).toBe(resultB);
    });
  });

  describe('createFigureSelector()', () => {
    const state = {
      chessboard: {
        fields: {
          a1: 'foobar',
        },
      },
    };
    const position = {
      column: 'a',
      row: 1,
    };

    it('should select the figure found at a position', () => {
      const figureSelector = createFigureSelector(position);

      const expected = 'foobar';
      const actual = figureSelector(state);

      expect(actual).toEqual(expected);
    });

    it('should memoize', () => {
      const stateCopy = {
        ...state,
      };
      const figureSelector = createFigureSelector(position);

      const resultA = figureSelector(stateCopy);
      delete stateCopy.chessboard;
      const resultB = figureSelector(stateCopy);

      expect(resultA).toBe(resultB);
    });
  });
});
