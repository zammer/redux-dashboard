import { SAVE_DASHBOARD_DIMENSIONS, CHANGE_COL_WIDTH, SET_RESIZING } from '../actions/index';

const initialState = {
  dashboardWidth: 0,
  columnWidth: 0,
  cols: 4,
  resizing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DASHBOARD_DIMENSIONS:
      return {
        ...state,
        dashboardWidth: action.dashboardWidth,
        columnWidth: action.columnWidth
      }
    case SET_RESIZING:
      return {
        ...state,
        resizing: action.resizing
      }
    case CHANGE_COL_WIDTH:
      return {
        ...state,
        cols: action.cols
      }
    default:
      return state
  }
}
