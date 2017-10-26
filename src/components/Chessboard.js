// @flow
import React, { Element } from 'react';
// $FlowFixMe - flow doesn't know styled-components
import styled from 'styled-components';

import type { Column, Row } from '../utils/field';

import { columns, rows } from '../utils/field';

export type Props = {
  renderField: (row: Row, column: Column) => Element<any>,
};

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);
  width: 85vh;
  height: 85vh;
  border: 1px solid black;
`;

function Chessboard(props: Props) {
  const { renderField } = props;

  return (
    <Board>
      {
        rows.map(
          (row: Row) => columns.map(
            (column: Column) => renderField(row, column),
          ),
        )
      }
    </Board>
  );
}

export default Chessboard;
