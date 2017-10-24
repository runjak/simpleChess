import { oppositeColor, toCssColor } from './colors';

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

describe('toCssColor()', () => {
  it('should behave correctly for color white', () => {
    expect(toCssColor('white')).toEqual('#ffffff');
  });

  it('should behave correctly for color black', () => {
    expect(toCssColor('black')).toEqual('#000000');
  });

  it('should default to pink for unknown colors', () => {
    expect(toCssColor()).toEqual('#ff00ff');
  });
});
