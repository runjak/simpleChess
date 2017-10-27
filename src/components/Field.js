// @flow
import React from 'react';
// $FlowFixMe - flow doesn't know styled-components
import styled, { css } from 'styled-components';

import type { Color } from '../utils/colors';
import type { Column, Row } from '../utils/field';

import { getColor, columnToIndex } from '../utils/field';
import { oppositeColor, toCssColor } from '../utils/colors';

export type Props = {
  column: Column,
  row: Row,
  children: Element,
  onClick?: () => void,
};

type StyledProps = {
  x: number,
  y: number,
  color: Color,
};

const StyledButton = styled.button`
  border: none;
  font-size: xx-large;
  width: calc(85vh / 8);
  height: calc(85vh / 8);

  ${(props: StyledProps) => {
    const { x, y, color } = props;

    return css`
      grid-column-start: ${x - 1};
      grid-column-end: ${x};
      grid-row-start: ${8 - y};
      grid-row-end: ${(8 - y) + 1};
      background-color: ${toCssColor(color)};
      color: ${toCssColor(oppositeColor(color))};
    `;
  }}
  `;

export default function Field(props: Props) {
  const { column, row, children, onClick } = props;
  const color = getColor(column, row);

  return (
    <StyledButton
      x={columnToIndex(column)}
      y={row}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
