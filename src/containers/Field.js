// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { Column, Row, Position } from '../utils/field';
import type { Figure } from '../utils/figures';
import type { State } from '../reducers';

import { clickField as clickFieldAction } from '../actions/player';
import FieldComponent from '../components/Field';
import { createFigureSelector } from '../selectors/chessboard';
import { toString as figureToString } from '../utils/figures';

type Props = {
  row: Row,
  column: Column,
  figure?: ?Figure,
  clickField?: (position: Position) => void,
};

const createMapStateToProps = (initialState: State, props: Props) => {
  const { column, row } = props;
  const figureSelector = createFigureSelector({ column, row });

  return (state: State) => ({
    figure: figureSelector(state),
  });
};

const mapDispatchToProps = {
  clickField: clickFieldAction,
};

class Field extends Component {
  props: Props;

  handleClick = () => {
    const { row, column, clickField } = this.props;

    if (clickField) {
      clickField({ column, row });
    }
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

export default connect(createMapStateToProps, mapDispatchToProps)(Field);
