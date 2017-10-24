//  @flow

export type Color = 'black' | 'white';

// eslint-disable-next-line import/prefer-default-export
export function oppositeColor(color: Color): Color {
  if (color === 'white') {
    return 'black';
  }

  return 'white';
}

export function toCssColor(color: Color): string {
  switch (color) {
    case 'white':
      return '#ffffff';

    case 'black':
      return '#000000';

    default:
      return '#ff00ff';
  }
}
