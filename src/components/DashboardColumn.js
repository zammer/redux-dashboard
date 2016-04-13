import React, { Component, PropTypes } from 'react';

export default ({ cols, height, onMouseDown, children, resizing }) => {
  const styles = resizing ? {display: 'block'} : {display: 'none'}
  return (
    <div style={{height}} className={`col-sm-${cols} dashboard-column`}>
      {children}
      <div style={styles} className="dashboard-column-scaler"></div>
      <div onMouseDown={onMouseDown} className="dashboard-column-resizer"></div>
    </div>
  );
};
