export const SAVE_DASHBOARD_DIMENSIONS = 'SAVE_DASHBOARD_DIMENSIONS';
export const CHANGE_COL_WIDTH = 'CHANGE_COL_WIDTH';
export const SET_RESIZING = 'SET_RESIZING';

export const saveDimensions = (dashboardWidth, columnWidth) => {
  return {
    type: SAVE_DASHBOARD_DIMENSIONS,
    dashboardWidth,
    columnWidth
  };
};

export const updateColWidth = (cols) => {
  return {
    type: CHANGE_COL_WIDTH,
    cols
  };
};

export const setResizing = (bool) => {
  return {
    type: SET_RESIZING,
    resizing: bool
  };
};
