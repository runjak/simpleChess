// @flow
import type { Figure } from './figures';
import type { Color } from './colors';

export type Column = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type FieldIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Row = FieldIndex;
export type Position = {
  column: Column,
  row: Row,
};
export type Fields = { [fieldName: string]: Figure };

export const columns: Array<Column> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const rows: Array<Row> = [1, 2, 3, 4, 5, 6, 7, 8];

export function columnToIndex(column: Column): FieldIndex {
  // $FlowFixMe - whole range tested
  return column.charCodeAt(0) - 96;
}

export function indexToColumn(index: FieldIndex): Column {
  // $FlowFixMe - whole range tested
  return String.fromCharCode(index + 96);
}

export function getColor(column: Column, row: Row): Color {
  const columnIndex = columnToIndex(column);

  // eslint-disable-next-line no-bitwise
  const parity = (columnIndex % 2) ^ (row % 2);

  return parity ? 'white' : 'black';
}

export function fieldName(column: Column, row: Row): string {
  return `${column}${row}`;
}

export function positionToFieldName(position: Position): string {
  const { column, row } = position;

  return fieldName(column, row);
}

export function isValidMove(fields: Fields, sourceField: string, targetField: string): boolean {
  const sourceFigure = fields[sourceField];
  const targetFigure = fields[targetField];

  if (!sourceFigure) {
    return false;
  }

  if (targetFigure) {
    if (targetFigure.color === sourceFigure.color) {
      return false;
    }
  }

  return true;
}
