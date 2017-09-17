import forEach from 'lodash/forEach';

import {
  columnToIndex,
  indexToColumn,
  getColor,
} from './Field';

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
