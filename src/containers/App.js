// @flow
import React from 'react';
// $FlowFixMe - flow doesn't know about styled-components
import styled from 'styled-components';

import type { Column, Row } from '../utils/field';

import Chessboard from '../components/Chessboard';
import Field from '../components/Field';

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
          <Field row={row} column={column}>
            {`${row}${column}`}
          </Field>
        )}
      />
    </Wrapper>
  );
}
