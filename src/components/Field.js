// @flow
import React from 'react';
import styled, { css } from 'styled-components';

import type { Column, Row, Color } from '../utils/Field';

import { getColor, columnToIndex } from '../utils/Field';

type Props = {
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
      background-color: ${color === 'white' ? '#fff' : '#000'};
      color: ${color === 'white' ? '#000' : '#fff'};
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
