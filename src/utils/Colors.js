//  @flow

export type Color = 'black' | 'white';

// eslint-disable-next-line import/prefer-default-export
export function oppositeColor(color: Color): Color {
  if (color === 'white') {
    return 'black';
  }

  return 'white';
}
