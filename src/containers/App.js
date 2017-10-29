// @flow
import React from 'react';
import styled from 'styled-components';

import type { Column, Row } from '../utils/field';

import Chessboard from '../components/Chessboard';
import Field from './Field';
import { fieldName } from '../utils/field';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default function App() {
  return (
    <Wrapper>
      <Chessboard
        renderField={(row: Row, column: Column) => (
          <Field row={row} column={column} key={fieldName(column, row)}>
            {`${row}${column}`}
          </Field>
        )}
      />
    </Wrapper>
  );
}
