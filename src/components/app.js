import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { saveDimensions } from '../actions/index';
import DashboardColumn from '../containers/DashboardColumnContainer';

class App extends Component {

  componentDidMount() {
    this.props.saveDimensions(this.refs.dashboard.clientWidth, this.refs.dashboard.clientWidth/12);
    console.log(this.refs.dashboard.clientWidth);
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-dark navbar-fixed-top bg-inverse" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="./">Dashboard Starter UI</a>
            </div>
          </div>
        </div>

        <div ref="dashboard" className="dashboard container-fluid">
          <div className="row">

            <DashboardColumn height={100}>
              <div className="dashboard-cell">
                <div className="dashboard-cell-title">
                  Pageviews by browser (past 24 hours)
                </div>
                <div className="dashboard-cell-body">
                </div>
              </div>
            </DashboardColumn>

            <div className="col-sm-2">
              <div className="dashboard-cell">
                <div className="dashboard-line-item">
                  <div className="dashboard-line-item-value">50%</div>
                  <div className="dashboard-line-item-text">Sales Forecast</div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="dashboard-cell">
                <div className="dashboard-cell-title">
                  Pageviews by browser (past 24 hours)
                </div>
                <div className="dashboard-cell-body">
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="dashboard-cell">
                <div className="dashboard-cell-title">
                  Pageviews by browser (past 24 hours)
                </div>
                <div className="dashboard-cell-body">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { saveDimensions })(App);
