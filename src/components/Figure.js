// @flow
import React from 'react';

type Piece =
  'King' |
  'Queen' |
  'Rook' |
  'Bishop' |
  'Knight' |
  'Pawn';

type Props = {
  color: 'black' | 'white',
  piece: Piece,
};

const pieceChars = {
  black: {
    King: '♚',
    Queen: '♛',
    Rook: '♜',
    Bishop: '♝',
    Knight: '♞',
    Pawn: '♟',
  },
  white: {
    King: '♔',
    Queen: '♕',
    Rook: '♖',
    Bishop: '♗',
    Knight: '♘',
    Pawn: '♙',
  },
};

export default function Figure(props: Props) {
  const { color, piece } = props;
  const char = pieceChars[color][piece];

  return (
    <div>{char}</div>
  );
}
