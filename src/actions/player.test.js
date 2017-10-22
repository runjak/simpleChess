import { selectFigure, selectTargetField } from './player';

describe('player actions', () => {
  describe('selectFigure()', () => {
    it('should create the expected action', () => {
      const expected = {
        type: 'SELECT_FIGURE',
        payload: 'foobar',
      };

      const actual = selectFigure('foobar');

      expect(actual).toEqual(expected);
    });
  });

  describe('selectTargetField()', () => {
    it('should create the expected action', () => {
      const expected = {
        type: 'SELECT_TARGET_FIELD',
        payload: 'foobar',
      };

      const actual = selectTargetField('foobar');

      expect(actual).toEqual(expected);
    });
  });
});
