import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  selectFigure,
  selectTargetField,
  clickField,
} from './player';
import state from './player-test-state.json';

const mockStore = configureStore([thunk]);

describe('player actions', () => {
  describe('selectFigure()', () => {
    it('should create the expected action', () => {
      const expected = {
        type: 'SELECT_FIGURE',
        payload: 'foobar',
      };

      const actual = selectFigure('foobar');

      expect(actual).toEqual(expected);
    });
  });

  describe('selectTargetField()', () => {
    it('should create the expected action', () => {
      const expected = {
        type: 'SELECT_TARGET_FIELD',
        payload: 'foobar',
      };

      const actual = selectTargetField('foobar');

      expect(actual).toEqual(expected);
    });
  });

  describe('clickField()', () => {
    const stateA1Selected = {
      ...state,
      players: {
        ...state.players,
        selectedField: {
          column: 'a',
          row: 1,
        },
      },
    };
    const clickFieldAction = clickField({
      column: 'a',
      row: 1,
    });

    it('should not dispatch if the clicked field is already selected', () => {
      const store = mockStore(stateA1Selected);

      store.dispatch(clickFieldAction);
      const actions = store.getActions();

      expect(actions).toEqual([]);
    });

    it('should not dispatch if trying to select opponents figure', () => {
      const store = mockStore(state);

      store.dispatch(clickField({
        column: 'b',
        row: 2,
      }));
      const actions = store.getActions();

      expect(actions).toEqual([]);
    });

    it('should dispatch a SELECT_FIGURE action if no figure is selected', () => {
      const store = mockStore(state);

      const expected = [{
        type: 'SELECT_FIGURE',
        payload: {
          column: 'a',
          row: 1,
        },
      }];

      store.dispatch(clickFieldAction);
      const actions = store.getActions();

      expect(actions).toEqual(expected);
    });

    it('should not dispatch if the target move is not valid', () => {
      const store = mockStore(stateA1Selected);

      store.dispatch(clickField({
        column: 'c',
        row: 3,
      }));
      const actions = store.getActions();

      expect(actions).toEqual([]);
    });

    it('should dispatch SELECT_TARGET_FIELD and MOVE_FIGURE on valid mvoe', () => {
      const store = mockStore(stateA1Selected);

      const expected = [
        {
          type: 'SELECT_TARGET_FIELD',
          payload: {
            column: 'b',
            row: 2,
          },
        },
        {
          type: 'MOVE_FIGURE',
          payload: {
            sourcePosition: {
              column: 'a',
              row: 1,
            },
            targetPosition: {
              column: 'b',
              row: 2,
            },
          },
        },
      ];

      store.dispatch(clickField({
        column: 'b',
        row: 2,
      }));
      const actions = store.getActions();

      expect(actions).toEqual(expected);
    });
  });
});
