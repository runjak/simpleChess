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
};

type StyledProps = {
  x: number,
  y: number,
  color: Color,
};

const StyledDiv = styled.div`
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
  const { column, row, children } = props;
  const color = getColor(column, row);

  return (
    <StyledDiv
      x={columnToIndex(column)}
      y={row}
      color={color}
    >
      {children}
    </StyledDiv>
  );
}
