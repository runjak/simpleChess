import forEach from 'lodash/forEach';

import {
  columnToIndex,
  indexToColumn,
  getColor,
  fieldName,
  positionToFieldName,
  isValidMove,
} from './field';

const columnRowCorrespondence = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

describe('field utils', () => {
  describe('columnToIndex()', () => {
    it('should behave according to spec', () => {
      forEach(columnRowCorrespondence, (expectedRow, column) => {
        const actualRow = columnToIndex(column);

        expect(actualRow).toEqual(expectedRow);
      });
    });
  });

  describe('indexToColumn()', () => {
    it('should behave according to spec', () => {
      forEach(columnRowCorrespondence, (row, expectedColumn) => {
        const actualColumn = indexToColumn(row);

        expect(actualColumn).toEqual(expectedColumn);
      });
    });
  });

  describe('getColor()', () => {
    it('should yield black for (a, 1)', () => {
      const actual = getColor('a', 1);

      expect(actual).toEqual('black');
    });

    it('should yield black for (h, 8)', () => {
      const actual = getColor('h', 8);

      expect(actual).toEqual('black');
    });

    it('should yield white for (a, 8)', () => {
      const actual = getColor('a', 8);

      expect(actual).toEqual('white');
    });

    it('should yield white for (h, 1)', () => {
      const actual = getColor('h', 1);

      expect(actual).toEqual('white');
    });
  });

  describe('fieldName()', () => {
    it('should compose the fieldName according to algebraic chess notation', () => {
      const actual = fieldName('g', 5);

      expect(actual).toEqual('g5');
    });
  });

  describe('positionToFieldName()', () => {
    it('should compose the fieldName for a position correctly', () => {
      const actual = positionToFieldName({
        column: 'foo',
        row: 'bar',
      });

      expect(actual).toEqual('foobar');
    });
  });

  describe('isValidMove()', () => {
    const fields = {
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
    };

    it('should be true given that tartetField is empty', () => {
      const actual = isValidMove(fields, 'a1', 'h8');

      expect(actual).toBeTruthy();
    });

    it('should be true given that targetField is of a different color', () => {
      const actual = isValidMove(fields, 'a1', 'b2');

      expect(actual).toBeTruthy();
    });

    it('should be false given that sourceField is empty', () => {
      const actual = isValidMove(fields, 'h8', 'b2');

      expect(actual).toBeFalsy();
    });

    it('should be false given that targetField is of the same color', () => {
      const actual = isValidMove(fields, 'a1', 'c3');

      expect(actual).toBeFalsy();
    });
  });
});
