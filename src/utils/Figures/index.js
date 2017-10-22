// @flow

import type { Color } from '../Colors';

import figureToStringMapping from './figure-to-string-mapping.json';

export type Piece =
  'King' |
  'Queen' |
  'Rook' |
  'Bishop' |
  'Knight' |
  'Pawn';

export type Figure = {
  piece: Piece,
  color: Color,
};

// $FlowFixMe - flow doesn't know structure of figureToStringMapping
export const pieces: Array<Piece> = Object.values(figureToStringMapping.black);

export function toString(figure: Figure): string {
  const { color, piece } = figure;

  return figureToStringMapping[color][piece];
}
