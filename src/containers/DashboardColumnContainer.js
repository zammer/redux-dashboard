import React from 'react';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { updateColWidth, setResizing } from '../actions/index';

import DashboardColumn from '../components/DashboardColumn';

class DashboardColumnContainer extends Component {

  constructor(props) {
    super(props);

    this.startResize = this.startResize.bind(this);
    this.resize = this.resize.bind(this);
    this.stopResize = this.stopResize.bind(this);
  }

  componentDidUpdate() {
    findDOMNode(this).style.width = '';
  }

  startResize() {
    this.props.setResizing(true);
    findDOMNode(this).style.width = Math.round(this.props.cols * this.props.columnWidth);
    window.addEventListener('mousemove', this.resize, false);
    window.addEventListener('mouseup', this.stopResize, false);
  }

  resize(e) {
    debugger;
     findDOMNode(this).style.width = this.props.columnWidth * Math.round(
       (e.clientX - findDOMNode(this).offsetLeft)/this.props.columnWidth) + 'px';
     findDOMNode(this).style.height = (e.clientY - findDOMNode(this).offsetTop) + 'px';
  }

  stopResize(e) {
      this.props.updateColWidth(Math.round(parseInt(findDOMNode(this).style.width, 10) / this.props.columnWidth));
      this.props.setResizing(false);
      window.removeEventListener('mousemove', this.resize, false);
      window.removeEventListener('mouseup', this.stopResize, false);
  }


  render() {
    return ( <DashboardColumn onMouseDown={this.startResize} {...this.props} />
    );
  }
}

const mapStateToProps = ({dashboard}) => {
  return {
    dashboardWidth: dashboard.dashboardWidth,
    columnWidth: dashboard.columnWidth,
    cols: dashboard.cols,
    resizing: dashboard.resizing
  };
};

export default connect(mapStateToProps, {updateColWidth, setResizing })(DashboardColumnContainer);
