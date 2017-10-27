// @flow
import React, { Component } from 'react';
// $FlowFixMe - flow doesn't know react-redux
import { connect } from 'react-redux';

import type { Column, Row } from '../utils/field';
import type { Figure } from '../utils/figures';
import type { State } from '../reducers';

import FieldComponent from '../components/Field';
import { createFigureSelector } from '../selectors/chessboard';
import { toString as figureToString } from '../utils/figures';

type Props = {
  row: Row,
  column: Column,
  figure?: ?Figure,
};

const createMapStateToProps = (initialState: State, props: Props) => {
  const { column, row } = props;
  const figureSelector = createFigureSelector({ column, row });

  return (state: State) => ({
    figure: figureSelector(state),
  });
};

class Field extends Component {
  props: Props;

  handleClick = () => {
    // eslint-disable-next-line no-alert
    window.alert('TEST?');
  };

  render() {
    const { row, column, figure } = this.props;

    return (
      <FieldComponent row={row} column={column} onClick={this.handleClick}>
        { figure && figureToString(figure) }
      </FieldComponent>
    );
  }
}

export default connect(createMapStateToProps)(Field);
