import { oppositeColor } from './Colors';

describe('oppositeColor()', () => {
  it('should switch black to white', () => {
    const expected = 'white';
    const actual = oppositeColor('black');

    expect(actual).toEqual(expected);
  });

  it('should switch white to black', () => {
    const expected = 'black';
    const actual = oppositeColor('white');

    expect(actual).toEqual(expected);
  });
});
