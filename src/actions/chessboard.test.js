import { moveFigure } from './chessboard';

describe('chessboard actions', () => {
  describe('moveFigure()', () => {
    it('should create the expected action', () => {
      const expected = {
        type: 'MOVE_FIGURE',
        payload: {
          sourcePosition: 'foo',
          targetPosition: 'bar',
        },
      };

      const actual = moveFigure('foo', 'bar');

      expect(actual).toEqual(expected);
    });
  });
});
