// @flow
import React from 'react';
// $FlowFixMe - flow doesn't know styled-components
import styled from 'styled-components';

import type { Column, Row } from '../utils/Field';

import { columns, rows } from '../utils/Field';
import Field from './Field';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);
  width: 85vh;
  height: 85vh;
  border: 1px solid black;
`;

function Chessboard() {
  return (
    <Board>
      {
        rows.map((row: Row) => (
          columns.map((column: Column) => (
            <Field row={row} column={column}>
              {`${row}:${column}`}
            </Field>
          ))
        ))
      }
    </Board>
  );
}

export default Chessboard;
