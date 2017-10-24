import React from 'react';
import styled from 'styled-components';

import Chessboard from './Chessboard';

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
      <Chessboard />
    </Wrapper>
  );
}
