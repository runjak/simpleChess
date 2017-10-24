import figureToStringMapping from './figure-to-string-mapping.json';

import { pieces, toString } from './';

describe('figures util', () => {
  describe('toString', () => {
    it('should lookup from the table correctly', () => {
      const colors = ['black', 'white'];

      colors.forEach((color) => {
        pieces.forEach((piece) => {
          const figure = {
            piece,
            color,
          };

          const expected = figureToStringMapping[color][piece];
          const actual = toString(figure);

          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
